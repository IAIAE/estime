
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {JSXSpreadAttribute} from 'estree-jsx'


// <App {...props} />
export function JSXSpreadAttributeHandler(
    this: Interpreter,
    node: JSXSpreadAttribute,
): BaseClosure {
    return this.createClosure({
        type: 'ObjectExpression',
        properties: [{
            // @ts-ignore
            type: 'SpreadElement',
            // @ts-ignore
            argument: node.argument,
        }]
    })
}


