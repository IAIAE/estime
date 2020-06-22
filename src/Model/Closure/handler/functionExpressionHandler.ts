
import { Node, ESTree } from "../../Node";
import { BaseClosure, } from '../../Closure'
import { Messages } from '../../Message'
import { Interpreter } from '../../../interpreter/main'
import Scope, { createScope } from '../../Scope'
import { Return } from '../../TokenClass'
import { defineFunctionName } from '../../../util'

// var f = function() {...}
// 在es5的标准下，没有块级作用域，只会在function下会创建一个新的scope。所以这里的操作和evaluate的感觉差不多
export function functionExpressionHandler(
    this: Interpreter,
    node:
        | (ESTree.FunctionExpression & { start?: number; end?: number })
        | (ESTree.FunctionDeclaration & { start?: number; end?: number })
): BaseClosure {
    const self = this
    const source = this.source;
    const oldDeclVars = this.collectDeclVars;
    const oldDeclFuncs = this.collectDeclFuncs;
    const oldDeclLex = this.collectDeclLex;

    // 准备新scope的声明提升变量
    this.collectDeclVars = Object.create(null);
    this.collectDeclFuncs = Object.create(null);
    this.collectDeclLex = [];
    const name = node.id ? node.id.name : ""; /**anonymous*/

    // 可变参数不计入function.length
    const paramLength = node.params.filter(_=>_.type!='RestElement').length;

    const paramsGetter = node.params.map(param => ({
        type: param.type,
        closure: this.createParamNameGetter(param)
    }));
    this.blockDeclareStart()
    // set scope
    const bodyClosure = this.createClosure(node.body);
    let lexDecls = this.blockDeclareEnd()

    // 这里是准备好的变量和函数声明提升
    const declVars = this.collectDeclVars;
    const declFuncs = this.collectDeclFuncs;
    const declLex = this.collectDeclLex

    this.collectDeclVars = oldDeclVars;
    this.collectDeclFuncs = oldDeclFuncs;
    this.collectDeclLex = oldDeclLex

    // 创建一个新的scope，然后返回一个函数，该函数会在新建的scope执行
    // @ts-ignore
    return (scope?: Scope) => {
        // bind current scope
        // 注意一个函数执行时候的作用域，并不是真正调用时候的作用域，而是声明时候代码所在地点的作用域
        // 函数名声明的作用域，等同于var functionName 声明所在的作用域
        const runtimeScope = scope || self.getCurrentScope();

        const func = function (...args: any[]) {
            // @ts-ignore
            self.callStack.push(`${name}`);

            // @ts-ignore
            const prevScope = self.getCurrentScope();
            // @ts-ignore
            const prev_functionVarScope = self._functionVarScope
            // 函数执行时，创建新的scope，然后下一行将程序的运行指针指向新的scope
            const currentScope = createScope(runtimeScope, `FunctionScope(${name})`);
            currentScope.lexDeclared = lexDecls!
            // @ts-ignore
            self.setCurrentScope(currentScope);
            // console.info('the current scope is ', currentScope)
            // 将准备好的变量和函数声明赋值到新的scope
            // @ts-ignore
            self.addDeclarationsToScope(declVars, declFuncs, currentScope);
            // @ts-ignore
            self._functionVarScope = currentScope
            // var t = function(){ typeof t } // function
            // t = function(){ typeof t } // function
            // z = function tx(){ typeof tx } // function
            // but
            // d = { say: function(){ typeof say } } // undefined
            if (name) {
                currentScope.data[name] = func;
            }
            // init arguments var
            currentScope.data["arguments"] = arguments;

            paramsGetter.forEach((getter, i) => {
                if(getter.type === 'RestElement'){
                    currentScope.data[getter.closure()] = args.slice(i)
                }else{
                    currentScope.data[getter.closure()] = args[i];
                }
            });

            // init this
            // @ts-ignore
            const prevContext = self.getCurrentContext();
            //for ThisExpression
            // @ts-ignore
            self.setCurrentContext(this);

            // 执行
            const result = bodyClosure();

            // 恢复
            // @ts-ignore
            self.setCurrentContext(prevContext);
            // @ts-ignore
            self.setCurrentScope(prevScope);
            // @ts-ignore
            self._functionVarScope = prev_functionVarScope
            // @ts-ignore
            self.callStack.pop();

            if (result instanceof Return) {
                return result.value;
            }
        };

        defineFunctionName(func, name);

        Object.defineProperty(func, "length", {
            value: paramLength,
            writable: false,
            enumerable: false,
            configurable: true,
        });

        Object.defineProperty(func, "toString", {
            value: () => {
                return source.slice(node.start, node.end);
            },
            writable: true,
            configurable: true,
            enumerable: false,
        });
        Object.defineProperty(func, "valueOf", {
            value: () => {
                return source.slice(node.start, node.end);
            },
            writable: true,
            configurable: true,
            enumerable: false,
        });

        return func;
    };
}