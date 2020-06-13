import { Node, ESTree } from "../../Node";
import { BaseClosure, } from '../../Closure'
import { Messages } from '../../Message'
import { Interpreter } from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'


// var i;
// var i=1;
// let i;
export function variableDeclarationHandler(this: Interpreter, node: ESTree.VariableDeclaration): BaseClosure {
    let assignmentsClosure: BaseClosure;
    const assignments: Array<ESTree.AssignmentExpression> = [];
    let blockVariables:string[] = []
    for (let i = 0; i < node.declarations.length; i++) {
        const decl = node.declarations[i];
        let variableName = this.getVariableName(decl.id)
        if(node.kind == 'var'){
            /**
             * 如果var声明的scope中已经有同名的词法作用域的变量，这个var的声明需要报错：
             * Cannot redeclare block-scoped variable 'xxx'
             */
            if(this.collectDeclLex.some(_=>_[variableName]) ){
                this.createInternalThrowError(Messages.RedeclareBlockScopeVariableError, node.type, node);
            }
            // 如果是var，声明提升
            this.varDeclaration(variableName);
        } else {
            // 如果是let、const等声明，变量名加入一个特殊的队列collectDeclLex的栈顶hash
            let stackTop = this.collectDeclLex[this.collectDeclLex.length - 1]
            stackTop[variableName] = true
            blockVariables.push(variableName)
        }
        if (decl.init) {
            assignments.push({
                type: "AssignmentExpression",
                operator: "=",
                left: decl.id,
                right: decl.init,
            });
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
                    scope.lexDeclared[name] = true
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