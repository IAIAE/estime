
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


export function throwStatementHandler(this: Interpreter, node: ESTree.ThrowStatement): BaseClosure {
    const argumentClosure = this.createClosure(node.argument);

    return () => {
        this.setValue(undefined);
        throw argumentClosure();
    };
}