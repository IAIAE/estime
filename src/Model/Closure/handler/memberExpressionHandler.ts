
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {isSymbol, storeKey} from '../../Symbols'

// a.b a['b'] arr[1]
export function memberExpressionHandler(this: Interpreter, node: ESTree.MemberExpression): BaseClosure {
    const objectGetter = this.createClosure(node.object);
    const keyGetter = this.createMemberKeyGetter(node);
    return () => {
        const MArray = this.globalScope.data['Array']
        const obj = objectGetter();
        let key = keyGetter();
        if(isSymbol(key)){
            // 对于模拟的Symbol属性，实际存储在了一个特殊的key下面
            return obj[storeKey(key)]
        }
        // arr[1]
        if(MArray.isArray(obj) && +key===key){
            return obj.__getIndex(key)
        }
        return obj[key];
    };
}

