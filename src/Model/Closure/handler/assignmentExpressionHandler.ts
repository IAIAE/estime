
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import { isSymbol, storeKey } from "../../Symbols";

// a=1 a+=2
export function assignmentExpressionHandler(this: Interpreter, node: ESTree.AssignmentExpression): BaseClosure {
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


    return () => {
        const MArray = this.globalScope.data['Array']
        // dataGetter执行时，判断如果是const且已经初始化，会报错
        const data = dataGetter();
        const name = nameGetter();
        let realName;
        if(isSymbol(name)){
            realName = storeKey(name)
        }else{
            realName = name
        }
        const rightValue = rightValueGetter();
        if (node.operator !== "=") {
            // if a is undefined
            // a += 1
            this.assertVariable(data, name, node);
        }
        switch (node.operator) {
            case "=":
                if(isSymbol(name)){
                    Object.defineProperty(data, realName, {
                        value: rightValue,
                        writable: true,
                        enumerable: false,
                        configurable: true,
                    });
                    return rightValue
                }else{
                    return updateValue(MArray, data, realName, rightValue)
                    // return (data[realName] = rightValue);
                }
            case "+=":
                return updateValue(MArray, data, realName, data[realName] + rightValue)
                // return (data[realName] += rightValue);
            case "-=":
                return updateValue(MArray, data, realName, data[realName] - rightValue)
                // return (data[realName] -= rightValue);
            case "*=":
                return updateValue(MArray, data, realName, data[realName] * rightValue)
                // return (data[realName] *= rightValue);
            // case "**=":
            // data[name]: Getter may be triggered
            // 	return (data[name] = Math.pow(data[name], rightValue));
            case "/=":
                return updateValue(MArray, data, realName, data[realName] / rightValue)
                // return (data[realName] /= rightValue);
            case "%=":
                return updateValue(MArray, data, realName, data[realName] % rightValue)
                // return (data[realName] %= rightValue);
            case "<<=":
                return updateValue(MArray, data, realName, data[realName] << rightValue)
                // return (data[realName] <<= rightValue);
            case ">>=":
                return updateValue(MArray, data, realName, data[realName] >> rightValue)
                // return (data[realName] >>= rightValue);
            case ">>>=":
                return updateValue(MArray, data, realName, data[realName] >>> rightValue)
                // return (data[realName] >>>= rightValue);
            case "&=":
                return updateValue(MArray, data, realName, data[realName] & rightValue)
                // return (data[realName] &= rightValue);
            case "^=":
                return updateValue(MArray, data, realName, data[realName] ^ rightValue)
                // return (data[realName] ^= rightValue);
            case "|=":
                return updateValue(MArray, data, realName, data[realName] | rightValue)
                // return (data[realName] |= rightValue);
            default:
                throw this.createInternalThrowError(
                    Messages.AssignmentExpressionSyntaxError,
                    node.type,
                    node
                );
        }
    };
}


function updateValue(MArray, data, name, value){
    if(MArray.isArray(data) && +name === name){
        data.__setIndex(name, value)
        return value
    }
    return (data[name] = value)
}