
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// func()
export function callExpressionHandler(this: Interpreter, node: ESTree.CallExpression): BaseClosure {
    const funcGetter = this.createCallFunctionGetter(node.callee);
    const argsGetter = node.arguments.map(arg => this.createClosure(arg));
    return () => {
        return funcGetter()(...argsGetter.map(arg => arg()));
    };
}

