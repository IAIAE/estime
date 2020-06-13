
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// a.b a['b']
export function memberExpressionHandler(this: Interpreter, node: ESTree.MemberExpression): BaseClosure {
    const objectGetter = this.createClosure(node.object);
    const keyGetter = this.createMemberKeyGetter(node);
    return () => {
        const obj = objectGetter();
        let key = keyGetter();

        return obj[key];
    };
}

