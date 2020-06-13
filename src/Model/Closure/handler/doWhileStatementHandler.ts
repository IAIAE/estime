
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


export function doWhileStatementHandler(this: Interpreter, node: ESTree.DoWhileStatement): BaseClosure {
    return this.forStatementHandler(node);
}