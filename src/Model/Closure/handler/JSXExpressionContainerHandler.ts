
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {JSXExpressionContainer} from 'estree-jsx'


// {showView && <div />}
export function JSXExpressionContainerHandler(
    this: Interpreter,
    node: JSXExpressionContainer,
): BaseClosure {
    let closure = this.createClosure(node.expression)
    return () => {
        return closure()
    };
}


