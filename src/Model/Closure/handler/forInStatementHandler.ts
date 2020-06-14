
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn, Break, Continue} from '../../Symbols'
import {ContinueLabel, BreakLabel, Return} from '../../TokenClass'
import Scope, { createScope } from "../../Scope";

// for(x in xx){}
export function forInStatementHandler(this: Interpreter, node: ESTree.ForInStatement): BaseClosure {
    // for( k in obj) or for(o.k in obj) ...
    let left = node.left;
    const rightClosure = this.createClosure(node.right);

    // for(let k in obj) {...}
    let initClosure;
    let initLexDecl;
    let bodyClosure: BaseClosure;
    let bodyLexDecl;
    if (node.left.type === "VariableDeclaration") {
        this.blockDeclareStart()
        initClosure = this.createClosure(node.left)
        this.blockDeclareStart()
        bodyClosure = this.createClosure(node.body);
        bodyLexDecl = this.blockDeclareEnd()
        initLexDecl = this.blockDeclareEnd()
        if(!initLexDecl){
            // 初始化参数是var，直接初始化即可
            initClosure()
            initClosure = null
        }else{
            // 初始化参数是let，等到执行时创建scope后再初始化
        }
        // reset left
        // for( k in obj)
        left = node.left.declarations[0].id;
    }else{
        this.blockDeclareStart()
        bodyClosure = this.createClosure(node.body);
        bodyLexDecl = this.blockDeclareEnd()
    }
    // for-in执行流程的优化，请查看 https://github.com/IAIAE/estime/issues/1
    return pNode => {
        let labelName: string | undefined;
        let result: any = EmptyStatementReturn;
        let x: string;

        if (pNode && pNode.type === "LabeledStatement") {
            labelName = pNode.label.name;
        }

        let prevScope: Scope;
        let newScope: Scope;
        if(initLexDecl){
            newScope = createScope(this.getCurrentScope(), `BScope(forin-let)`, "block")
            newScope.lexDeclared = initLexDecl
            prevScope = this.entryBlockScope(newScope)
        }

        const data = rightClosure();

        for (x in data) {

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
                            value: x,
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
                        value: x,
                    },
                })();
            }

            let bodyPrev: Scope
            let bodyScope: Scope
            // 对于for循环，每次执行body都需要绑定新的scope，这么来说确实效率会慢很多
            if(bodyLexDecl){
                bodyScope = createScope(this.getCurrentScope(), 'BScope(forin-body)', 'block')
                bodyScope.lexDeclared = bodyLexDecl
                bodyPrev = this.entryBlockScope(bodyScope)
            }
            // save last value
            const ret = this.setValue(bodyClosure());
            // 恢复
            if(bodyLexDecl){
                this.setCurrentScope(bodyPrev!);
            }
            // notice: never return Break or Continue!
            if (ret === EmptyStatementReturn || ret === Continue) continue;
            if (ret === Break) {
                break;
            }

            result = ret;

            // stop continue label
            if (result instanceof ContinueLabel && result.value === labelName) {
                result = EmptyStatementReturn;
                continue;
            }

            if (
                result instanceof Return ||
                result instanceof BreakLabel ||
                result instanceof ContinueLabel
            ) {
                break;
            }
        }
        // 恢复
        if(initLexDecl){
            this.setCurrentScope(prevScope!)
        }
        return result;
    };
}