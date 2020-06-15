
import { Node, ESTree } from "../../Node";
import { BaseClosure, } from '../../Closure'
import { Messages } from '../../Message'
import { Interpreter } from '../../../interpreter/main'
import { createScope } from '../../Scope'
import { Return } from '../../TokenClass'
import { defineFunctionName } from '../../../util'

// var f = function() {...}
// 在es5的标准下，没有块级作用域，只会在function下会创建一个新的scope。所以这里的操作和evaluate的感觉差不多
export function arrowFunctionExpressionHandler(
    this: Interpreter,
    node: (ESTree.ArrowFunctionExpression & { start?: number; end?: number })
): BaseClosure {
    const source = this.source;
    const oldDeclVars = this.collectDeclVars;
    const oldDeclFuncs = this.collectDeclFuncs;
    const oldDeclLex = this.collectDeclLex;

    // 准备新scope的声明提升变量
    this.collectDeclVars = Object.create(null);
    this.collectDeclFuncs = Object.create(null);
    this.collectDeclLex = [];
    const name = 'anonymous_arrow_func'; /**anonymous*/
    const paramLength = node.params.length;

    const paramsGetter = node.params.map(param => this.createParamNameGetter(param));
    this.blockDeclareStart()
    // set scope
    const bodyClosure = this.createClosure(node.body);
    let lexDecls = this.blockDeclareEnd()

    // 这里是准备好的变量和函数声明提升
    const declVars = this.collectDeclVars;
    const declFuncs = this.collectDeclFuncs;
    const declLex = this.collectDeclLex

    this.collectDeclVars = oldDeclVars;
    this.collectDeclFuncs = oldDeclFuncs;
    this.collectDeclLex = oldDeclLex

    // 创建一个新的scope，然后返回一个函数，该函数会在新建的scope执行
    return () => {
        // bind current scope
        // 箭头函数的scope和context都是在函数声明的时候就确定了。
        const runtimeScope = this.getCurrentScope();
        const ctx = this.getCurrentContext();

        const func = (...args: any[]) => {
            this.callStack.push(`${name}`);

            const prevScope = this.getCurrentScope();
            // 函数执行时，创建新的scope，然后下一行将程序的运行指针指向新的scope
            const currentScope = createScope(runtimeScope, `FunctionScope(${name})`);
            currentScope.lexDeclared = lexDecls!
            this.setCurrentScope(currentScope);
            // 将准备好的变量和函数声明赋值到新的scope
            this.addDeclarationsToScope(declVars, declFuncs, currentScope);

            // var t = function(){ typeof t } // function
            // t = function(){ typeof t } // function
            // z = function tx(){ typeof tx } // function
            // but
            // d = { say: function(){ typeof say } } // undefined

            // arrow-function has no 'arguments'
            // currentScope.data["arguments"] = arguments;

            paramsGetter.forEach((getter, i) => {
                currentScope.data[getter()] = args[i];
            });

            // init this
            const prevContext = this.getCurrentContext();
            //for ThisExpression
            this.setCurrentContext(ctx);

            // 执行
            const result = bodyClosure();

            // 恢复
            this.setCurrentContext(prevContext);
            this.setCurrentScope(prevScope);
            this.callStack.pop();

            if (result instanceof Return) {
                return result.value;
            }
        };

        // todo: let foo = ()=>{}, foo.name==='foo'
        defineFunctionName(func, name);

        // arrow-func has no .length
        // Object.defineProperty(func, "length", {
        //     value: paramLength,
        //     writable: false,
        //     enumerable: false,
        //     configurable: true,
        // });

        Object.defineProperty(func, "toString", {
            value: () => {
                return source.slice(node.start, node.end);
            },
            writable: true,
            configurable: true,
            enumerable: false,
        });
        Object.defineProperty(func, "valueOf", {
            value: () => {
                return source.slice(node.start, node.end);
            },
            writable: true,
            configurable: true,
            enumerable: false,
        });

        return func;
    };
}