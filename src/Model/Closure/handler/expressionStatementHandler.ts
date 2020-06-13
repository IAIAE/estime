
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'



// all expression: a+1 a&&b a() a.b ...
export function expressionStatementHandler(this: Interpreter, node: ESTree.ExpressionStatement): BaseClosure {
    return this.createClosure(node.expression);
}