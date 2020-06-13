
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'
import Scope, { createScope } from "../../Scope";


// if(true){let i = 123;}else{}
export function ifStatementHandler(
    this: Interpreter,
    node: ESTree.IfStatement | ESTree.ConditionalExpression
): BaseClosure {
    this.blockDeclareStart()
    const testClosure = this.createClosure(node.test);
    const consequentClosure = this.createClosure(node.consequent);
    const alternateClosure = node.alternate
        ? this.createClosure(node.alternate)
        : /*!important*/ () => EmptyStatementReturn;
    let lexDeclared = this.blockDeclareEnd()
    return () => {
        let prevScope:Scope;
        let newScope: Scope;
        if(lexDeclared){
            newScope = createScope(this.getCurrentScope(), `BScope`, "block")
            newScope.lexDeclared = lexDeclared
            prevScope = this.entryBlockScope(newScope)
        }
        let res = testClosure() ? consequentClosure() : alternateClosure();
        // 恢复
        if(lexDeclared){
            this.setCurrentScope(prevScope!);
        }
        return res;
    };
}