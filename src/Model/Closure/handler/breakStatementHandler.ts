import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {Break} from '../../Symbols'
import {BreakLabel} from '../../TokenClass'


export function breakStatementHandler(this: Interpreter, node: ESTree.BreakStatement): BaseClosure {
    return () => (node.label ? new BreakLabel(node.label.name) : Break);
}