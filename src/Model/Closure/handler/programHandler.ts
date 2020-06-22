
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'
import {Return, BreakLabel, ContinueLabel} from '../../TokenClass'
import {Break, Continue} from '../../Symbols'
import Scope, { createScope } from "../../Scope";


// {...}
export function programHandler(this: Interpreter, node: ESTree.Program | ESTree.BlockStatement): BaseClosure {
    // const currentScope = this.getCurrentScope();
    // 记录当前块级作用域的所有词法变量的声明
    this.blockDeclareStart()
    // 块级作用域的handler初始化的时候就会遍历下级所有的body，创建closure，创建closure的时候就会完成变量声明提升的操作
    let stmtClosures: Array<BaseClosure> = (node.body as Node[]).map((stmt: Node) => {
        // if (stmt.type === "EmptyStatement") return null;
        return this.createClosure(stmt);
    });
    let functionDecl = (node.body as Node[]).map((_, index)=>({type: _.type, index})).filter(_=>_.type == 'FunctionDeclaration')
    // 存放了块级作用域变量的列表
    let lexDeclared = this.blockDeclareEnd()

    return () => {
        let result: any = EmptyStatementReturn;
        let prevScope:Scope;
        let newScope: Scope;
        if(lexDeclared){
            newScope = createScope(this.getCurrentScope(), `BScope`, "block")
            newScope.lexDeclared = lexDeclared
            prevScope = this.entryBlockScope(newScope)
        }
        // 如果有函数声明，先执行函数声明：
        functionDecl.forEach(_=>{
            stmtClosures[_.index]()
            // @ts-ignore
            stmtClosures[_.index] = null
        })
        stmtClosures = stmtClosures.filter(_=>_)
        for (let i = 0; i < stmtClosures.length; i++) {
            const stmtClosure = stmtClosures[i];

            // save last value
            const ret = this.setValue(stmtClosure());

            // if (!stmtClosure) continue;
            // EmptyStatement
            if (ret === EmptyStatementReturn) continue;

            result = ret;

            // BlockStatement: break label;  continue label; for(){ break ... }
            // ReturnStatement: return xx;
            if (
                result instanceof Return ||
                result instanceof BreakLabel ||
                result instanceof ContinueLabel ||
                result === Break ||
                result === Continue
            ) {
                break;
            }
        }
        // 恢复
        if(lexDeclared){
            this.setCurrentScope(prevScope!);
        }
        // save last value
        return result;
    };
}