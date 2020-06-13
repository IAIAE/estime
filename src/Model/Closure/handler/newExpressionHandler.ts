import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter, internalFunction, InternalInterpreterReflection} from '../../../interpreter/main'
import {isFunction} from '../../../util'

// new Ctrl()
export function newExpressionHandler(this:Interpreter, node: ESTree.NewExpression): BaseClosure {
    const source = this.source;
    const expression = this.createClosure(node.callee);
    const args = node.arguments.map(arg => this.createClosure(arg));

    return () => {
        const construct = expression();

        if (!isFunction(construct) || construct.__IS_EVAL_FUNC) {
            const callee = <ESTree.Expression & { start?: number; end?: number }>node.callee;
            const name = source.slice(callee.start, callee.end);

            throw this.createInternalThrowError(Messages.IsNotConstructor, name, node);
        }

        // new Function(...)
        if (construct.__IS_FUNCTION_FUNC) {
            return (construct as typeof internalFunction)(
                new InternalInterpreterReflection(this),
                ...args.map(arg => arg())
            );
        }

        return new construct(...args.map(arg => arg()));
    };
}