
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {JSXIdentifier} from 'estree-jsx'


// <hello /> -> JSXIdentifier: hello
export function JSXIdentifierHandler(
    this: Interpreter,
    node: JSXIdentifier,
): BaseClosure {
    let closure = this.createClosure({
        type: "Identifier",
        name: node.name,
        loc: node.loc,
        // @ts-ignore
        start: node.start,
        // @ts-ignore
        end: node.end,
    })
    return () => {
        return closure()
    };
}


