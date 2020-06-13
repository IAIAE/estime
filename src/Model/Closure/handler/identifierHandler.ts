
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'

// var1 ...
export function identifierHandler(this: Interpreter, node: ESTree.Identifier): BaseClosure {
    return () => {
        const currentScope = this.getCurrentScope();
        const data = this.getScopeDataFromName(node.name, currentScope);
        this.assertVariable(data, node.name, node);
        return data[node.name];
    };
}
