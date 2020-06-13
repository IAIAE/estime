
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {noop} from '../../../util'
import {Return} from '../../TokenClass'

// return xx;
export function returnStatementHandler(this: Interpreter, node: ESTree.ReturnStatement): BaseClosure {
    const argumentClosure = node.argument ? this.createClosure(node.argument) : noop;

    return () => new Return(argumentClosure());
}