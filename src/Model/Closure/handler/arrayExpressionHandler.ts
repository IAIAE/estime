import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// [1,2,3]
export function arrayExpressionHandler(this:Interpreter,  node: ESTree.ArrayExpression) {
    //fix: [,,,1,2]
    const items: Array<{type: string, closure: BaseClosure}|null> = node.elements.map(element =>{
        if(!element) return null
        return {
            type: element.type,
            // @ts-ignore
            closure: element.type == 'SpreadElement'?this.createClosure(element.argument):this.createClosure(element)
        }
    });
    return () => {
        const len = items.length;
        let result:any = [];
        for (let i = 0; i < len; i++) {
            const item = items[i];
            if(!item){
                result.push(undefined)
            }else{
                if(item.type == 'SpreadElement'){
                    let arr = item.closure()
                    if(!Array.isArray(arr)){
                        throw this.createInternalThrowError(Messages.NormalError, 'cannot spread, not an array type', node)
                    }
                    result = result.concat(arr)
                }else{
                    result.push(item.closure())
                }
            }
        }

        return result;
    };
}