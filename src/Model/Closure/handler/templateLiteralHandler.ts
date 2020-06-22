
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'
import {Return, BreakLabel, ContinueLabel} from '../../TokenClass'
import {Break, Continue} from '../../Symbols'
import Scope, { createScope } from "../../Scope";

function getString(val){
    if(typeof val === 'string'){
        return val
    }else if(typeof val.toString === 'function'){
        return val.toString()
    }else{
        return Object.prototype.toString.call(val)
    }
}

// `hello ${estime}, test`
export function templateLiteralHandler(this: Interpreter, node: ESTree.TemplateLiteral): BaseClosure {
    let vasGetters = node.expressions.map(_=>this.createClosure(_))
    let strs = node.quasis.map(_=>({
        value: _.value,
        tail: _.tail,
    }))

    return ()=>{
        let str = ''
        for(let i=0;i<strs.length;i++){
            // use cooked or raw??
            str += (strs[i].value.cooked + (strs[i].tail?'':getString(vasGetters[i]())))
        }
        return str
    }
}