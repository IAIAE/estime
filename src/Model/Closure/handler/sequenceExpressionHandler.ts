
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// var1,var2,...
export function sequenceExpressionHandler(this: Interpreter, node: ESTree.SequenceExpression): BaseClosure {
    const expressions = node.expressions.map(item => this.createClosure(item));

    return () => {
        let result: any;
        const len = expressions.length;

        for (let i = 0; i < len; i++) {
            const expression = expressions[i];
            result = expression();
        }

        return result;
    };
}

