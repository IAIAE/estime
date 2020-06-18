
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'


// func()
export function callExpressionHandler(this: Interpreter, node: ESTree.CallExpression): BaseClosure {
    const funcGetter = this.createCallFunctionGetter(node.callee);
    const argsGetter = node.arguments.map(arg => ({
        type: arg.type,
        closure: this.createClosure(arg)
    }));
    return () => {
        let args:any[] = []
        for(let i=0;i<argsGetter.length;i++){
            let arg = argsGetter[i]
            if(arg.type === 'SpreadElement'){
                args = args.concat(arg.closure())
            }else{
                args.push(arg.closure())
            }
        }
        return funcGetter()(...args);
    };
}

