import { Node, ESTree } from "../../Node";
import {BaseClosure, CaseItem, SwitchCaseClosure } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn, Continue, DefaultCase, Break, } from '../../Symbols'
import {Return, ContinueLabel, BreakLabel, } from '../../TokenClass'
import Scope, { createScope } from "../../Scope";

export function switchStatementHandler(this: Interpreter, node: ESTree.SwitchStatement): BaseClosure {
    const discriminantClosure = this.createClosure(node.discriminant);

    this.blockDeclareStart()
    const caseClosures: SwitchCaseClosure[] = node.cases.map(item => {
        const testClosure = item.test ? this.createClosure(item.test) : () => DefaultCase;
		const bodyClosure = this.createClosure({
            // @ts-ignore
            type: "GroupStatement", body: item.consequent,
		});

		return () => ({
            testClosure,
			bodyClosure,
		});
    });
    let blockLexDecl = this.blockDeclareEnd()

    return () => {
        const value = discriminantClosure();

        let match = false;
        let result: any;
        let ret: any, defaultCase: CaseItem | undefined;

        // switch执行的时候共用同一个blockscope
        let prevScope: Scope;
        let newScope: Scope;
        if(blockLexDecl){
            newScope = createScope(this.getCurrentScope(), `BScope(switch)`, "block")
            newScope.lexDeclared = blockLexDecl
            prevScope = this.entryBlockScope(newScope)
        }

        for (let i = 0; i < caseClosures.length; i++) {
            const item = caseClosures[i]();
            const test = item.testClosure();

            if (test === DefaultCase) {
                defaultCase = item;
                continue;
            }

            if (match || test === value) {
                match = true;
                ret = this.setValue(item.bodyClosure());

                // notice: never return Break!
                if (ret === EmptyStatementReturn) continue;
                if (ret === Break) {
                    break;
                }

                result = ret;

                if (
                    result instanceof Return ||
                    result instanceof BreakLabel ||
                    result instanceof ContinueLabel ||
                    result === Continue
                ) {
                    break;
                }
            }
        }

        if (!match && defaultCase) {
            ret = this.setValue(defaultCase.bodyClosure());

            const isEBC = ret === EmptyStatementReturn || ret === Break || ret === Continue;
            // notice: never return Break or Continue!
            if (!isEBC) {
                result = ret;
            }
        }

        if(blockLexDecl){
            this.setCurrentScope(prevScope!)
        }

        return result;
    };
}