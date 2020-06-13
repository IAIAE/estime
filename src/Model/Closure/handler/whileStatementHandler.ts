
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// while(1) {...}
export function whileStatementHandler(this: Interpreter, node: ESTree.WhileStatement): BaseClosure {
    return this.forStatementHandler(node);
}