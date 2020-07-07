
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {JSXText} from 'estree-jsx'


// <div>\n   "hello" </div>  ->  JSXText: "\n    \"hello\" "
export function JSXTextHandler(
    this: Interpreter,
    node: JSXText,
): BaseClosure {
    let val = node.value.trim()
    let closure = ()=>(val || null)
    return () => {
        return closure()
    };
}


