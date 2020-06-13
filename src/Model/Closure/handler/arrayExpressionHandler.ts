import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// [1,2,3]
export function arrayExpressionHandler(this:Interpreter,  node: ESTree.ArrayExpression) {
    //fix: [,,,1,2]
    const items: Array<BaseClosure> = node.elements.map(element =>
        element ? this.createClosure(element) : element
    );

    return () => {
        const len = items.length;
        const result = Array(len);
        for (let i = 0; i < len; i++) {
            const item = items[i];
            if (item) {
                result[i] = item();
            }
        }

        return result;
    };
}