
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'

export function emptyStatementHandler(this: Interpreter, node: Node): BaseClosure {
    return () => EmptyStatementReturn;
}