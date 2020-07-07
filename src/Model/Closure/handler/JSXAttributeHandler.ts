
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {JSXAttribute, BaseModuleDeclaration} from 'estree-jsx'


// <App className="hello" />
// <App className={name} />
// <App show />
export function JSXAttributeHandler(
    this: Interpreter,
    node: JSXAttribute,
): BaseClosure {
    if(node.name.type == 'JSXNamespacedName'){
        throw this.createInternalThrowError(Messages.NormalError, 'JSXNamespacedName not support ', node)
    }
    let name = node.name.name
    let valueClosure:BaseClosure
    if(!node.value){
        valueClosure = () => true
    }else if(node.value.type == 'JSXFragment'){
        throw this.createInternalThrowError(Messages.NormalError, 'JSXFragment not support!', node)
    }else {
        valueClosure = this.createClosure(node.value)
    }
    return () => {
        return {
            [name]: valueClosure()
        }
    }

}


