
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'

// let {name, ...rest} = obj
// let [first, ...rest] = arr
export function objectPatternAssignHandler(this: Interpreter, node: {
    type: 'ObjectPatternAssignExpression',
    left: {
        type: 'Identifier',
        name: string
    },
    right: any
    rest?: string[]
    index?: number
    arrRest?: true
}): BaseClosure {
    // var s = function(){}
    // s.name === s
    if (
        node.left.type === "Identifier" &&
        node.right.type === "FunctionExpression" &&
        !node.right.id
    ) {
        node.right.id = {
            type: "Identifier",
            name: node.left.name,
        };
    }

    const dataGetter = this.createLeftObjectGetter(node.left);
    const nameGetter = this.createNameGetter(node.left);
    const rightValueGetter = this.createClosure(node.right);
    const rightName = node.right.id?node.right.id.name:'rightValue'
    const rest = node.rest
    const copyIndex = node.index
    const arrRest = node.arrRest
    return () => {
        // dataGetter执行时，判断如果是const且已经初始化，会报错
        const data = dataGetter();
        const name = nameGetter();
        const rightValue = rightValueGetter();
        if(copyIndex != null){
            // ArrayPattern let [first, ...rest] = arr
            if(arrRest){
                // let [...rest] = arr
                if(rightValue.slice && typeof rightValue.slice === 'function'){
                    return (data[name] = rightValue.slice(copyIndex))
                }else{
                    throw this.createInternalThrowError(Messages.NormalError, `${rightValue}.slice is not a function`)
                }
            }else{
                // let [first, second] = arr
                return (data[name] = rightValue.__getIndex(copyIndex))
            }
        }else{
            // ObjectPattern let {name, ...rest} = obj
            if(rest && rest.length){
                if(!rightValue || typeof rightValue !== 'object'){
                    return (data[name] = {})
                }
                let res = {}
                Object.getOwnPropertyNames(rightValue).forEach(key=>{
                    if(rest.indexOf(key) == -1){
                        res[key] = rightValue[key]
                    }
                })
                return (data[name] = res)
            }else{
                return (data[name] = rightValue[name])
            }
        }
    };
}