
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'

// super()
export function superHandler(this: Interpreter, node: ESTree.Super): BaseClosure {
    return () => {
        const currentScope = this.getCurrentScope();
        const data = this.getScopeDataFromName('super', currentScope);
        // todo: 其实还要验证是否是自己的super，因为作用域链向上找，可能找到上级的和自己完全不相关的super变量，这种情况不多，先暂缓修复
        this.assertVariable(data, 'super', node);
        return data['super'];
    };
}
