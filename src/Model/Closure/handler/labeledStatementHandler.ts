import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn, Continue, Break} from '../../Symbols'
import {Return, ContinueLabel, BreakLabel} from '../../TokenClass'

// label: xxx
export function labeledStatementHandler(this: Interpreter, node: ESTree.LabeledStatement): BaseClosure {
    const labelName = node.label.name;
    const bodyClosure = this.createClosure(node.body);

    return () => {
        let result: any;
        const currentScope = this.getCurrentScope();
        currentScope.labelStack.push(labelName);

        result = bodyClosure(node);

        // stop break label
        if (result instanceof BreakLabel && result.value === labelName) {
            result = EmptyStatementReturn;
        }

        currentScope.labelStack.pop();

        return result;
    };
}