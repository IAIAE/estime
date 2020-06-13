import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn, Continue} from '../../Symbols'
import {Return, ContinueLabel} from '../../TokenClass'

export function continueStatementHandler(this: Interpreter, node: ESTree.ContinueStatement): BaseClosure {
    return () => (node.label ? new ContinueLabel(node.label.name) : Continue);
}