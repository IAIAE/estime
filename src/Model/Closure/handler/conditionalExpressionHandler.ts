
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// test() ? true : false
export function conditionalExpressionHandler(this: Interpreter, node: ESTree.ConditionalExpression): BaseClosure {
    return this.ifStatementHandler(node);
}