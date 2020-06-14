
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'

// a=1 a+=2
export function assignmentExpressionHandler(this: Interpreter, node: ESTree.AssignmentExpression): BaseClosure {
    // var s = function(){}
    // s.name === s
    if (
        node.left.type === "Identifier" &&
        node.right.type === "FunctionExpression" &&
        !node.right.id
    ) {
        node.right.id = {
            type: "Identifier",
            name: node.left.name,
        };
    }

    const dataGetter = this.createLeftObjectGetter(node.left);
    const nameGetter = this.createNameGetter(node.left);
    const rightValueGetter = this.createClosure(node.right);

    return () => {
        // dataGetter执行时，判断如果是const且已经初始化，会报错
        const data = dataGetter();
        const name = nameGetter();
        const rightValue = rightValueGetter();
        if (node.operator !== "=") {
            // if a is undefined
            // a += 1
            this.assertVariable(data, name, node);
        }

        switch (node.operator) {
            case "=":
                return (data[name] = rightValue);
            case "+=":
                return (data[name] += rightValue);
            case "-=":
                return (data[name] -= rightValue);
            case "*=":
                return (data[name] *= rightValue);
            // case "**=":
            // data[name]: Getter may be triggered
            // 	return (data[name] = Math.pow(data[name], rightValue));
            case "/=":
                return (data[name] /= rightValue);
            case "%=":
                return (data[name] %= rightValue);
            case "<<=":
                return (data[name] <<= rightValue);
            case ">>=":
                return (data[name] >>= rightValue);
            case ">>>=":
                return (data[name] >>>= rightValue);
            case "&=":
                return (data[name] &= rightValue);
            case "^=":
                return (data[name] ^= rightValue);
            case "|=":
                return (data[name] |= rightValue);
            default:
                throw this.createInternalThrowError(
                    Messages.AssignmentExpressionSyntaxError,
                    node.type,
                    node
                );
        }
    };
}