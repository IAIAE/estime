
import { Node, ESTree } from "../../Node";
import { BaseClosure, } from '../../Closure'
import { Messages } from '../../Message'
import { Interpreter } from '../../../interpreter/main'
import { EmptyStatementReturn } from '../../Symbols'

// function test(){}
export function functionDeclarationHandler(this: Interpreter, node: ESTree.FunctionDeclaration): BaseClosure {
    let functionClosure;
    let functionName: string;
    if (node.id) {
        functionClosure = this.functionExpressionHandler(node);
        Object.defineProperty(functionClosure, "isFunctionDeclareClosure", {
            value: true,
            writable: false,
            configurable: false,
            enumerable: false,
        });
        functionName = node.id.name
        // 函数编译期间，函数名提升为undefined。在声明执行时才确认函数体
        // 参见issue： https://github.com/IAIAE/estime/issues/4
        // @ts-ignore
        this.funcDeclaration(node.id.name, undefined);
        // this.funcDeclaration(node.id.name, functionClosure);

    }
    return () => {
        // 函数声明执行的时候再去绑定作用域，以免产生函数执行时作用域错误绑定的情况
        // https://github.com/IAIAE/estime/issues/4
        if (functionClosure) {
            if (this._functionVarScope && (
                this._functionVarScope.data[functionName] === undefined
                // 重复声明一个同名的函数，会覆盖的
                || typeof this._functionVarScope.data[functionName] == 'function'
            )
            ) {
                let theFunc = functionClosure(this.getCurrentScope())
                this._functionVarScope.data[functionName] = theFunc
            }
        }

        return EmptyStatementReturn;
    };
}