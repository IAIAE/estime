import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn, Continue} from '../../Symbols'
import {Return, ContinueLabel} from '../../TokenClass'

export function debuggerStatementHandler(this: Interpreter, node: ESTree.DebuggerStatement): BaseClosure {
    return () => {
        debugger;
        return EmptyStatementReturn;
    };
}