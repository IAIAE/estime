
import { Node, ESTree } from "../../Node";
import { BaseClosure, } from '../../Closure'
import { Messages } from '../../Message'
import { Interpreter } from '../../../interpreter/main'
import { noop } from '../../../util'
import { EmptyStatementReturn, Continue, Break, } from '../../Symbols'
import { Return, BreakLabel, ContinueLabel } from '../../TokenClass'
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
    if (node.type === "ForStatement") {
        if (node.init) {
            this.blockDeclareStart()
            initClosure = this.createClosure(node.init)
            initLexDeclared = this.blockDeclareEnd()
        }
        updateClosure = node.update ? this.createClosure(node.update) : noop;
    } else {
        // while, do-while
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
        if (initLexDeclared) {
            newScope = createScope(this.getCurrentScope(), `BScope(for-let)`, "block")
            newScope.lexDeclared = initLexDeclared
            prevScope = this.entryBlockScope(newScope)
        }
        for (initClosure(); shouldInitExec || testClosure(); updateClosure()) {
            shouldInitExec = false;

            let bodyClosure = getBodyClosure()
            let bodyPrev: Scope
            let bodyScope: Scope
            if(bodyClosure.needBlock){
                bodyScope = createScope(this.getCurrentScope(), `BScope(for-body)`, "block")
                bodyScope.lexDeclared = bodyClosure.needBlock
                bodyPrev = this.entryBlockScope(bodyScope)
            }
            // save last value
            const ret = this.setValue(bodyClosure.closure());
            // 恢复作用域
            if (bodyClosure.needBlock) {
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
        if (initLexDeclared) {
            this.setCurrentScope(prevScope!)
        }
        return result;
    };
}