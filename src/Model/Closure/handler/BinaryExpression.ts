import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'

// a==b a/b
export function binaryExpressionHandler(this:Interpreter, node: ESTree.BinaryExpression): BaseClosure {
    const leftExpression = this.createClosure(node.left);
    const rightExpression = this.createClosure(node.right);

    return () => {
        const leftValue = leftExpression();
        const rightValue = rightExpression();

        switch (node.operator) {
            case "==":
                return leftValue == rightValue;
            case "!=":
                return leftValue != rightValue;
            case "===":
                return leftValue === rightValue;
            case "!==":
                return leftValue !== rightValue;
            case "<":
                return leftValue < rightValue;
            case "<=":
                return leftValue <= rightValue;
            case ">":
                return leftValue > rightValue;
            case ">=":
                return leftValue >= rightValue;
            case "<<":
                return leftValue << rightValue;
            case ">>":
                return leftValue >> rightValue;
            case ">>>":
                return leftValue >>> rightValue;
            case "+":
                return leftValue + rightValue;
            case "-":
                return leftValue - rightValue;
            case "*":
                return leftValue * rightValue;
            case "**":
                return Math.pow(leftValue, rightValue);
            case "/":
                return leftValue / rightValue;
            case "%":
                return leftValue % rightValue;
            case "|":
                return leftValue | rightValue;
            case "^":
                return leftValue ^ rightValue;
            case "&":
                return leftValue & rightValue;
            case "in":
                return leftValue in rightValue;
            case "instanceof":
                return leftValue instanceof rightValue;
            default:
                throw this.createInternalThrowError(
                    Messages.BinaryOperatorSyntaxError,
                    node.operator,
                    node
                );
        }
    };
}