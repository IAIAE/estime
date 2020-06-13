import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// a && b
export function logicalExpressionHandler(this: Interpreter, node: ESTree.LogicalExpression): BaseClosure {
    const leftExpression = this.createClosure(node.left);
    const rightExpression = this.createClosure(node.right);

    return () => {
        switch (node.operator) {
            case "||":
                return leftExpression() || rightExpression();
            case "&&":
                return leftExpression() && rightExpression();
            default:
                throw this.createInternalThrowError(
                    Messages.LogicalOperatorSyntaxError,
                    node.operator,
                    node
                );
        }
    };
}