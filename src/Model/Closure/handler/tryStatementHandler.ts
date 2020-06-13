
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn, } from '../../Symbols'
import {Return} from '../../TokenClass'
import Scope, { createScope } from "../../Scope";


const hasOwnProperty = Object.prototype.hasOwnProperty;

// try{...}catch(e){...}finally{}
export function tryStatementHandler(this: Interpreter, node: ESTree.TryStatement): BaseClosure {
    this.blockDeclareStart()
    const blockClosure = this.createClosure(node.block);
    let tryLexDecl = this.blockDeclareEnd()

    const handlerClosure = node.handler ? this.catchClauseHandler(node.handler) : null;
    this.blockDeclareStart()
    const finalizerClosure = node.finalizer ? this.createClosure(node.finalizer) : null;
    let finalLexDecl = this.blockDeclareEnd()

    return () => {
        const currentScope = this.getCurrentScope();
        const currentContext = this.getCurrentContext();
        const labelStack = currentScope.labelStack.concat([]);
        const callStack: string[] = this.callStack.concat([]);
        let result: any = EmptyStatementReturn;
        let finalReturn: any;
        let throwError: any;

        const reset = () => {
            this.setCurrentScope(currentScope); //reset scope
            this.setCurrentContext(currentContext); //reset context
            currentScope.labelStack = labelStack; //reset label stack
            this.callStack = callStack; //reset call stack
        };

        /**
         * try{...}catch(e){...}finally{...} execution sequence:
         * try stmt
         * try throw
         * catch stmt (if)
         * finally stmt
         * finally throw or finally return
         * catch throw or catch return
         * try return
         */

        try {
            let prevScope: Scope;
            let newScope: Scope;
            if(tryLexDecl){
                newScope = createScope(this.getCurrentScope(), `BScope(try)`, "block")
                newScope.lexDeclared = tryLexDecl
                prevScope = this.entryBlockScope(newScope)
            }
            result = this.setValue(blockClosure());
            if(tryLexDecl){
                this.setCurrentContext(prevScope!)
            }
            if (result instanceof Return) {
                finalReturn = result;
            }
        } catch (err) {
            reset();

            if (this.isInterruptThrow(err)) {
                throw err;
            }

            if (handlerClosure) {
                try {
                    result = this.setValue(handlerClosure(err));
                    if (result instanceof Return) {
                        finalReturn = result;
                    }
                } catch (err) {
                    reset();

                    if (this.isInterruptThrow(err)) {
                        throw err;
                    }

                    // save catch throw error
                    throwError = err;
                }
            }
        }
        // finally {
        if (finalizerClosure) {
            try {
                let prevScope: Scope;
                let newScope: Scope;
                if(finalLexDecl){
                    newScope = createScope(this.getCurrentScope(), `BScope(final)`, "block")
                    newScope.lexDeclared = finalLexDecl
                    prevScope = this.entryBlockScope(newScope)
                }
                //do not save finally result
                result = finalizerClosure();
                if(finalLexDecl){
                    this.setCurrentScope(prevScope!)
                }
                if (result instanceof Return) {
                    finalReturn = result;
                }
                // finalReturn = finalizerClosure();
            } catch (err) {
                reset();

                if (this.isInterruptThrow(err)) {
                    throw err;
                }

                // save finally throw error
                throwError = err;
            }

            // if (finalReturn instanceof Return) {
            // 	result = finalReturn;
            // }
        }
        // }

        if (throwError) throw throwError;

        if (finalReturn) {
            return finalReturn;
        }

        return result;
    };
}


// ... catch(e){...}
export function catchClauseHandler(this: Interpreter, node: ESTree.CatchClause): (e: Error) => any {
    const paramNameGetter = this.createParamNameGetter(node.param);

    // catch中的代码会新开一个函数级别的作用域，
    // 但是不同的是context并没有变（函数调用的话，context会改变），
    const oldDeclVars = this.collectDeclVars;
    const oldDeclFuncs = this.collectDeclFuncs;
    const oldDeclLex = this.collectDeclLex;

    // 准备新scope的声明提升变量
    this.collectDeclVars = Object.create(null);
    this.collectDeclFuncs = Object.create(null);
    this.collectDeclLex = [];

    // set scope
    this.blockDeclareStart()
    const bodyClosure = this.createClosure(node.body);
    let lexDecl = this.blockDeclareEnd()

    // 这里是准备好的变量和函数声明提升
    const declVars = this.collectDeclVars;
    const declFuncs = this.collectDeclFuncs;
    const declLex = this.collectDeclLex

    // 恢复
    this.collectDeclVars = oldDeclVars;
    this.collectDeclFuncs = oldDeclFuncs;
    this.collectDeclLex = oldDeclLex

    return (err: Error) => {
        // get param name "e"
        const paramName = paramNameGetter();

        const prevScope = this.getCurrentScope();
        const currentScope = createScope(prevScope, `FScope(catch)`);
        currentScope.lexDeclared = lexDecl!
        this.setCurrentScope(currentScope);
        this.addDeclarationsToScope(declVars, declFuncs, currentScope);
        // add "e" to scope
        currentScope.data[paramName] = err

        let result: any;
        // run
        result = bodyClosure();


        this.setCurrentScope(prevScope)

        return result;
    };
}