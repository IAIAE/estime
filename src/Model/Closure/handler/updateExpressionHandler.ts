import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// ++a --a
export function updateExpressionHandler(this: Interpreter, node: ESTree.UpdateExpression): BaseClosure {
    const objectGetter = this.createObjectGetter(node.argument);
    const nameGetter = this.createNameGetter(node.argument);
    return () => {
        const obj = objectGetter();
        const name = nameGetter();

        this.assertVariable(obj, name, node);

        switch (node.operator) {
            case "++":
                return node.prefix ? ++obj[name] : obj[name]++;
            case "--":
                return node.prefix ? --obj[name] : obj[name]--;
            default:
                throw this.createInternalThrowError(
                    Messages.UpdateOperatorSyntaxError,
                    node.operator,
                    node
                );
        }
    };
}

