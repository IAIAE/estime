import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// typeof a !a()
export function unaryExpressionHandler(this: Interpreter, node: ESTree.UnaryExpression): BaseClosure {
    switch (node.operator) {
        case "delete":
            const objectGetter = this.createObjectGetter(node.argument);
            const nameGetter = this.createNameGetter(node.argument);

            return () => {
                // not allowed to delete root scope property
                // rootContext has move to prototype chai, so no judgment required
                // if (this.isRootScope(node.argument)) {
                // 	return false;
                // }

                let obj = objectGetter();
                const name = nameGetter();

                return delete obj[name];
            };
        default:
            let expression: BaseClosure;
            // for typeof undefined var
            // typeof adf9ad
            if (node.operator === "typeof" && node.argument.type === "Identifier") {
                const objectGetter = this.createObjectGetter(node.argument);
                const nameGetter = this.createNameGetter(node.argument);

                expression = () => objectGetter()[nameGetter()];
            } else {
                expression = this.createClosure(node.argument);
            }

            return () => {
                const value = expression();

                switch (node.operator) {
                    case "-":
                        return -value;
                    case "+":
                        return +value;
                    case "!":
                        return !value;
                    case "~":
                        return ~value;
                    case "void":
                        return void value;
                    case "typeof":
                        return typeof value;
                    default:
                        throw this.createInternalThrowError(
                            Messages.UnaryOperatorSyntaxError,
                            node.operator,
                            node
                        );
                }
            };
    }
}