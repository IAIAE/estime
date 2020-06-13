
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'
import {Return, BreakLabel, ContinueLabel} from '../../TokenClass'
import {Break, Continue} from '../../Symbols'
import Scope, { createScope } from "../../Scope";


// {...} 但是不生成blockScope，组装多个表达式一起执行时，采用这种中间形式的一种数据结构，只有编译器内部使用
export function groupStatementHandler(this: Interpreter, node: ESTree.BlockStatement): BaseClosure {
    // const currentScope = this.getCurrentScope();
    // 块级作用域的handler初始化的时候就会遍历下级所有的body，创建closure，创建closure的时候就会完成变量声明提升的操作
    const stmtClosures: Array<BaseClosure> = (node.body as Node[]).map((stmt: Node) => {
        // if (stmt.type === "EmptyStatement") return null;
        return this.createClosure(stmt);
    });

    return () => {
        let result: any = EmptyStatementReturn;
        let prevScope:Scope;
        let newScope: Scope;
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
        // save last value
        return result;
    };
}