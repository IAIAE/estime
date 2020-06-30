
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'

// (...args)
export function spreadElementHandler(this: Interpreter, node: ESTree.SpreadElement): BaseClosure {
    let closure = this.createClosure(node.argument)
    return () => {
        const data = closure()
        const MArray = this.globalScope.data['Array']
        if(!MArray.isArray(data)){
            throw this.createInternalThrowError(Messages.NormalError, `spread node type not array`, node)
        }
        return data;
    };
}
