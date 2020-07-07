
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {JSXMemberExpression} from '../../Node'


// <App.Panel />
export function JSXMemberExpressionHandler(
    this: Interpreter,
    node: JSXMemberExpression,
): BaseClosure {
    let dataClosure:BaseClosure
    if(node.object.type == 'JSXIdentifier'){
        dataClosure = this.createClosure({
            type: 'Identifier',
            name: node.object.name
        })
    }else if(node.object.type == 'JSXMemberExpression'){
        dataClosure = this.createClosure(node.object)
    }else {
        // @ts-ignore
        throw this.createInternalThrowError(Messages.NormalError, 'unknown jsxmember type '+node.object.type, node)
    }
    // jsx中的组件名key不存在computed的情况，例如：<App[name] />
    // 只可能是<App.panel />，name不需要动态计算，所以直接返回字符串的字面量即可
    let keyClosure = () => node.property.name
    return () => {
        let data = dataClosure()
        let key = keyClosure()
        return data[key]
    };
}


