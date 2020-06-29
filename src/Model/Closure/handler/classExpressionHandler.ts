
import { Node, ESTree } from "../../Node";
import { BaseClosure, } from '../../Closure'
import { Messages } from '../../Message'
import { Interpreter } from '../../../interpreter/main'
import { createScope } from '../../Scope'
import { Return } from '../../TokenClass'
import { defineFunctionName } from '../../../util'


let extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extend(child, father) {
    extendStatics(child, father);
    function __() { this.constructor = father; }
    child.prototype = father === null ? Object.create(father) : (__.prototype = father.prototype, new __());
};

type seeyouagain = {
    name: {
        computed: boolean
        value: BaseClosure | string
    },
    value: BaseClosure
}

export function classExpressionHandler(
    this: Interpreter,
    node:
        | (ESTree.ClassExpression & { start?: number; end?: number })
        | (ESTree.ClassDeclaration & { start?: number; end?: number })
): BaseClosure {

    const className = node.id ? node.id.name : ""; /**anonymous*/

    // @ts-ignore
    let classDecl: {
        cons?: BaseClosure
        // 静态的属性，无论是属性还是方法，我们都一视同仁。直接赋值给类就好。
        static: seeyouagain[],
        // 放在实例this上的一些方法，这些方法如果是箭头函数，需要自绑定，如果是一般函数，不用自绑定
        fieldsArrow: seeyouagain[],
        // 放在实例this上的一般属性
        fieldsProperty: seeyouagain[],
        // 放在prototype上的实例方法
        method: seeyouagain[]
    } = {
        static: [],
        fieldsArrow: [],
        fieldsProperty: [],
        method: [],
    }
    node.body.body.forEach(item=>{
        if(item.type === 'MethodDefinition'){
            // 关注3个属性：kind\static\computed
            if(item.kind === 'constructor'){
                classDecl.cons = this.createClosure(item.value)
            }else if(item.kind === 'method'){
                classDecl[item.static?'static':'method'].push({
                    name: {
                        computed: item.computed,
                        // @ts-ignore
                        value: item.computed?this.createClosure(item.key):item.key.name
                    },
                    value: this.createClosure(item.value)
                })
            }else if(item.kind === 'get' || item.kind === 'set'){
                // 类的setter和getter不支持
                throw this.createInternalThrowError(Messages.NormalError, 'not support getter and setter in class', node)
            }
        }else if(item.type === 'FieldDefinition'){
            // 关注static\computed
            if(item.static){
                classDecl.static.push({
                    name: {
                        computed: item.computed,
                        // @ts-ignore
                        value: item.computed?this.createClosure(item.key):item.key.name
                    },
                    value: this.createClosure(item.value)
                })
            }else{
                // 如果是箭头函数，需要特殊自绑定，其余的（属性或者function函数），不用做处理
                // @ts-ignore
                let t = item.value.type == 'ArrowFunctionExpression'?'fieldsArrow':'fieldsProperty'
                classDecl[t].push({
                    name: {
                        computed: item.computed,
                        // @ts-ignore
                        value: item.computed?this.createClosure(item.key):item.key.name
                    },
                    value: this.createClosure(item.value)
                })
            }
        }else {
            throw this.createInternalThrowError(Messages.NormalError, 'unknown class body type '+item.type, node.body)
        }
    })
    let superClass = node.superClass?this.createClosure(node.superClass):null

    return () => {
        let self = this;
        let _super = superClass?superClass():null
        let cons = classDecl.cons?classDecl.cons():null
        let func = function(){
            let _this = this
            if(superClass){
                _this = _super.call(_this) || _this
            }
            // 先绑定field属性，再执行constructor
            classDecl.fieldsArrow.forEach(item=>{
                // @ts-ignore
                let prev = self.getCurrentContext()
                // @ts-ignore
                self.setCurrentContext(_this)
                let fn = item.value()
                // @ts-ignore
                self.setCurrentContext(prev)

                _this[item.name.computed?(item.name.value as BaseClosure)():item.name.value] = fn
            })

            classDecl.fieldsProperty.forEach(item=>{
                _this[item.name.computed?(item.name.value as BaseClosure)():item.name.value] = item.value()
            })
            if(cons){
                cons.apply(_this, arguments)
            }
            return _this;
        }
        superClass && __extend(func, _super)

        classDecl.method.forEach(item=>{
            func.prototype[item.name.computed?(item.name.value as BaseClosure)():item.name.value] = item.value()
        })
        classDecl.static.forEach(item=>{
            func[item.name.computed?(item.name.value as BaseClosure)():item.name.value] = item.value()
        })
        if(className){
            Object.defineProperty(func, "name", {
                value: className,
                writable: false,
                enumerable: false,
                configurable: true,
            });
        }
        return func
    };
}