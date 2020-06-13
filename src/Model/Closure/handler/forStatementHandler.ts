
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {noop} from '../../../util'
import {EmptyStatementReturn, Continue, Break,} from '../../Symbols'
import {Return, BreakLabel, ContinueLabel} from '../../TokenClass'
import Scope, { createScope } from "../../Scope";


// for(var i = 0; i < 10; i++) {...}
export function forStatementHandler(
    this: Interpreter,
    node: ESTree.ForStatement | ESTree.WhileStatement | ESTree.DoWhileStatement
): BaseClosure {
    let initClosure = noop;
    let testClosure = node.test ? this.createClosure(node.test) : () => true;
    let updateClosure = noop;
    let initLexDeclared: any;
    let bodyLexDeclared: any
    let bodyClosure: BaseClosure;
    if (node.type === "ForStatement") {
        if(node.init){
            this.blockDeclareStart()
            initClosure = this.createClosure(node.init)
            this.blockDeclareStart()
            bodyClosure = this.createClosure(node.body);
            bodyLexDeclared = this.blockDeclareEnd()
            initLexDeclared = this.blockDeclareEnd()
        }else{
            this.blockDeclareStart()
            bodyClosure = this.createClosure(node.body);
            bodyLexDeclared = this.blockDeclareEnd()
        }
        updateClosure = node.update ? this.createClosure(node.update) : noop;
    }else{
        // while, do-while
        this.blockDeclareStart()
        bodyClosure = this.createClosure(node.body);
        bodyLexDeclared = this.blockDeclareEnd()
    }

    return pNode => {
        let labelName: string | undefined;
        let result: any = EmptyStatementReturn;
        let shouldInitExec = node.type === "DoWhileStatement";

        if (pNode && pNode.type === "LabeledStatement") {
            labelName = pNode.label.name;
        }
        let prevScope: Scope;
        let newScope: Scope;
        if(initLexDeclared){
            newScope = createScope(this.getCurrentScope(), `BScope(for-let)`, "block")
            newScope.lexDeclared = initLexDeclared
            prevScope = this.entryBlockScope(newScope)
        }
        for (initClosure(); shouldInitExec || testClosure(); updateClosure()) {
            shouldInitExec = false;

            let bodyPrev: Scope
            let bodyScope: Scope
            // 对于for循环，每次执行body都需要绑定新的scope，这么来说确实效率会慢很多
            if(bodyLexDeclared){
                bodyScope = createScope(this.getCurrentScope(), 'BScope(for-body)', 'block')
                bodyScope.lexDeclared = bodyLexDeclared
                bodyPrev = this.entryBlockScope(bodyScope)
            }
            // save last value
            const ret = this.setValue(bodyClosure());
            // 恢复作用域
            if(bodyLexDeclared){
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
        if(initLexDeclared){
            this.setCurrentScope(prevScope!)
        }
        return result;
    };
}