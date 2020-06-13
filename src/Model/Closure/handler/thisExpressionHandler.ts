

import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// this
export function thisExpressionHandler(this: Interpreter, node: ESTree.ThisExpression): BaseClosure {
    return () => this.getCurrentContext();
}

