
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'

// function test(){}
export function functionDeclarationHandler(this: Interpreter, node: ESTree.FunctionDeclaration): BaseClosure {
    if (node.id) {
        const functionClosure = this.functionExpressionHandler(node);
        Object.defineProperty(functionClosure, "isFunctionDeclareClosure", {
            value: true,
            writable: false,
            configurable: false,
            enumerable: false,
        });
        this.funcDeclaration(node.id.name, functionClosure);
    }
    return () => {
        return EmptyStatementReturn;
    };
}