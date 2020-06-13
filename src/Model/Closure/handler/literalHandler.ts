
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// 1 'name'
export function literalHandler(
    this: Interpreter,
    node: ESTree.Literal & { regex?: { pattern: string; flags: string } }
): BaseClosure {
    return () => {
        if (node.regex) {
            return new RegExp(node.regex.pattern, node.regex.flags);
        }

        return node.value;
    };
}


