
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn, Break, Continue, storeKey} from '../../Symbols'
import {ContinueLabel, BreakLabel, Return} from '../../TokenClass'
import Scope, { createScope } from "../../Scope";





// for(x of xx){}
export function forOfStatementHandler(this: Interpreter, node: ESTree.ForOfStatement): BaseClosure {
    // for( k of obj) or for(o.k of obj) ...
    let left = node.left;
    const rightClosure = this.createClosure(node.right);
    let getBodyClosure = () => {
        if(node.body.type == 'BlockStatement'){
            // node.body是个blockStatement，这里我们就不多此一举再去检测块作用域了。
            return {
                needBlock: null,
                closure: this.createClosure(node.body)
            }
        }else {
            this.blockDeclareStart()
            let closure = this.createClosure(node.body)
            let bodyLex = this.blockDeclareEnd()
            return {
                needBlock: bodyLex,
                closure,
            }
        }
    }
    // for-of的逻辑是：1、先检查有没有Symbol.iterator方法，有的话，调用获取迭代器
    // 2、如果没有检查是否是Array，是的话for循环取元素
    // 3、以上都不是，报错。例如传一个obj进来，是要报错的
    // for(let k of obj) {...}
    let initClosure;
    let initLexDecl;
    if (node.left.type === "VariableDeclaration") {
        this.blockDeclareStart()
        initClosure = this.createClosure(node.left)
        initLexDecl = this.blockDeclareEnd()
        if(!initLexDecl){
            // 初始化参数是var，直接初始化即可
            initClosure()
            initClosure = null
        }else{
            // 初始化参数是let，等到执行时创建scope后再初始化
        }
        // reset left
        left = node.left.declarations[0].id;
    }else{
    }
    return pNode => {
        let labelName: string | undefined;
        let result: any = EmptyStatementReturn;

        if (pNode && pNode.type === "LabeledStatement") {
            labelName = pNode.label.name;
        }
        const Smbl = this.globalScope.data['Symbol']
        let prevScope: Scope;
        let newScope: Scope;
        if(initLexDecl){
            newScope = createScope(this.getCurrentScope(), `BScope(forof-let)`, "block")
            newScope.lexDeclared = initLexDecl
            prevScope = this.entryBlockScope(newScope)
        }

        const data = rightClosure();
        if(data[storeKey(Smbl.iterator)] && typeof data[storeKey(Smbl.iterator)] == 'function'){
            let iter = data[storeKey(Smbl.iterator)]()
            let val = iter.next()
            while(val && !val.done){
                let t = loopBody.call(this, _=>{result=_}, initLexDecl, newScope!, node, left, labelName, getBodyClosure, val.value)
                if(t === 'break'){ break; }
                val = iter.next()
            }
        }else if(Array.isArray(data)){
            for(let i=0;i<data.length;i++){
                let t = loopBody.call(this, _=>{result=_}, initLexDecl, newScope!, node, left, labelName, getBodyClosure, data[i])
                if(t === 'break') {break;}
            }
        }else{
            throw this.createInternalThrowError(Messages.VariableNotIterableError, '', node)
        }

        // 恢复
        if(initLexDecl){
            this.setCurrentScope(prevScope!)
        }
        return result;
    };
}


function loopBody(this: Interpreter, setResult, initLexDecl, newScope, node, left, labelName, getBodyClosure, rightVal){
    if(initLexDecl){
        // 将所有声明变量的初始化改为false，重新赋值
        Object.getOwnPropertyNames(newScope!.lexDeclared).forEach(name=>{
            newScope.lexDeclared[name].init = false
        })
        this.variableDeclarationHandler({
            type: "VariableDeclaration",
            kind: (node.left as ESTree.VariableDeclaration).kind,
            declarations: [{
                type: "VariableDeclarator",
                id: (node.left as ESTree.VariableDeclaration).declarations[0].id,
                init: {
                    type: "Literal",
                    value: rightVal,
                }
            }]
        })();
    }else{
        // assign left to scope
        // k = x
        // o.k = x
        // 对于迭代变量的赋值应该在bodyScope之外
        this.assignmentExpressionHandler({
            type: "AssignmentExpression",
            operator: "=",
            left: left as ESTree.Pattern,
            right: {
                type: "Literal",
                value: rightVal,
            },
        })();
    }

    let bodyClosure = getBodyClosure()
    let bodyPrev: Scope
    let bodyScope: Scope
    // 对于for循环，每次执行body都需要绑定新的scope，这么来说确实效率会慢很多
    if(bodyClosure.needBlock){
        bodyScope = createScope(this.getCurrentScope(), 'BScope(forin-body)', 'block')
        bodyScope.lexDeclared = bodyClosure.needBlock
        bodyPrev = this.entryBlockScope(bodyScope)
    }
    // save last value
    const ret = this.setValue(bodyClosure.closure());
    // 恢复
    if(bodyClosure.needBlock){
        this.setCurrentScope(bodyPrev!);
    }
    // notice: never return Break or Continue!
    if (ret === EmptyStatementReturn || ret === Continue) return 'continue';
    if (ret === Break) {
        return 'break';
    }
    setResult(ret);
    // stop continue label
    if (ret instanceof ContinueLabel && ret.value === labelName) {
        setResult(EmptyStatementReturn);
        return 'continue'
    }
    if (
        ret instanceof Return ||
        ret instanceof BreakLabel ||
        ret instanceof ContinueLabel
    ) {
        return 'break';
    }
    return
}