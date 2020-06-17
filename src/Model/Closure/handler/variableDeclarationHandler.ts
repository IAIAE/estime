import { Node, ESTree } from "../../Node";
import { BaseClosure, } from '../../Closure'
import { Messages } from '../../Message'
import { Interpreter } from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'


function detectVaiable(this: Interpreter, node: ESTree.VariableDeclaration, varName: string, blockVariables: any[]){
    if(node.kind == 'var'){
        /**
         * 如果var声明的scope中已经有同名的词法作用域的变量，这个var的声明需要报错：
         * Cannot redeclare block-scoped variable 'xxx'
         */
        if(this.collectDeclLex.some(_=>_[varName]) ){
            throw this.createInternalThrowError(Messages.RedeclareBlockScopeVariableError, node.type, node);
        }
        // 如果是var，声明提升
        this.varDeclaration(varName);
    } else {
        // 如果是let\const声明，变量名加入一个特殊的队列collectDeclLex的栈顶hash
        let stackTop = this.collectDeclLex[this.collectDeclLex.length - 1]
        // collectDeclLex主要是在编译阶段收集块变量用，如果在执行阶段动态去声明一个变量，那collectDeclLex将是空数组，所以判断一下
        stackTop && (stackTop[varName] = {
            init: false,
            kind: node.kind
        })
        blockVariables.push(varName)
    }
}

// var i;
// var i=1;
// let i;
export function variableDeclarationHandler(this: Interpreter, node: ESTree.VariableDeclaration): BaseClosure {
    let assignmentsClosure: BaseClosure;
    const assignments: Array<ESTree.AssignmentExpression| { type: 'ObjectPatternAssignExpression', left: any, right: any, rest?: string[], index?:number, arrRest?: true}> = [];
    let blockVariables:string[] = []

    for (let i = 0; i < node.declarations.length; i++) {
        const decl = node.declarations[i];
        if(decl.id.type == 'ObjectPattern'){
            if(!decl.init){
                throw this.createInternalThrowError(Messages.SpreadPatternVariableNoInit, '', node)
            }
            // let {name, ...rest} = obj
            // 实际是声明了两个变量
            let properties = decl.id.properties
            let alreadyVars:string[] = []
            properties.forEach(item=>{
                if(item.type === 'Property'){
                    let varName = this.getVariableName(item.value)
                    alreadyVars.push(varName)
                    // 检测一下是否块变量
                    detectVaiable.call(this, node, varName, blockVariables)
                    assignments.push({
                        type: 'ObjectPatternAssignExpression',
                        left: item.value,
                        right: decl.init,
                    })
                }else if(item.type === 'RestElement'){
                    // @ts-ignore
                    let varName = item.argument.name
                    detectVaiable.call(this, node, varName, blockVariables)
                    assignments.push({
                        type: "ObjectPatternAssignExpression",
                        // @ts-ignore
                        left: item.argument,
                        right: decl.init,
                        rest: alreadyVars,
                    })
                }else{
                    throw this.createInternalThrowError(Messages.UnknownVariableDeclTypeError, '', node)
                }
            })
        }else if(decl.id.type == 'ArrayPattern'){
            // let [first, ...rest] = arr;
            if(!decl.init){
                throw this.createInternalThrowError(Messages.SpreadPatternVariableNoInit, '', node)
            }
            let elements = decl.id.elements
            let alreadyVars:string[] = []
            elements.forEach((item, arr_ind)=>{
                if(item.type === 'Identifier'){
                    let varName = item.name
                    alreadyVars.push(varName)
                    // 检测一下是否块变量
                    detectVaiable.call(this, node, varName, blockVariables)
                    assignments.push({
                        type: 'ObjectPatternAssignExpression',
                        left: item,
                        right: decl.init,
                        index: arr_ind,
                    })
                }else if(item.type === 'RestElement'){
                    // @ts-ignore
                    let varName = item.argument.name
                    detectVaiable.call(this, node, varName, blockVariables)
                    assignments.push({
                        type: "ObjectPatternAssignExpression",
                        // @ts-ignore
                        left: item.argument,
                        right: decl.init,
                        index: arr_ind,
                        arrRest: true,
                    })
                }else{
                    throw this.createInternalThrowError(Messages.UnknownVariableDeclTypeError, '', node)
                }
            })
        } else {
            let variableName = this.getVariableName(decl.id)
            detectVaiable.call(this, node, variableName, blockVariables)
            // 一些情形，低于const的声明不会有init，比如for(const i in arr){}
            // 我们这里不做强校验，主动声明的const必须初始化，acorn在生成ast之前就有校验，我们信任acorn吧。另外，即使这里不初始化，之后对const的赋值也会报错，所以不会产生太大影响。
            // if(node.kind == 'const' && !decl.init){
            //     throw this.createInternalThrowError(Messages.ConstNotInitError, variableName, node)
            // }
            if (decl.init) {
                assignments.push({
                    type: "AssignmentExpression",
                    operator: "=",
                    left: decl.id,
                    right: decl.init,
                });
            }
        }
    }

    if (assignments.length) {
        assignmentsClosure = this.createClosure({
            // @ts-ignore
            type: "GroupStatement",
            // @ts-ignore
            body: (assignments as unknown) as ESTree.Statement[],
        });
    }

    return () => {
        if (assignmentsClosure) {
            if(blockVariables.length){
                let scope = this.getCurrentScope()
                // 确认初始化块级变量
                blockVariables.forEach(name=>{
                    if(scope.lexDeclared[name].kind === 'const'){
                        // 对于const变量，我们只在复制运行的时候将init设为true，
                        // init设为true后，之后对该变量的所有左值访问都将报错
                    }else if(scope.lexDeclared[name].kind === 'let'){
                        // 对于let变量，我们在这里讲init设为true就好，时机不太影响
                        scope.lexDeclared[name].init = true
                    }
                })
            }
            const oldValue = this.isVarDeclMode;
            this.isVarDeclMode = true;
            assignmentsClosure();
            // console.info('oldvalue is ', oldValue)
            this.isVarDeclMode = oldValue;
        }

        return EmptyStatementReturn;
    };
}