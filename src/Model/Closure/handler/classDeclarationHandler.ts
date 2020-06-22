
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'

// class Test {...}
export function classDeclarationHandler(this: Interpreter, node: ESTree.ClassDeclaration): BaseClosure {
    let className;
    let classClosure
    // class的作用域是块级作用域
    if(node.id){
        classClosure = this.classExpressionHandler(node);
        let stackTop = this.collectDeclLex[this.collectDeclLex.length - 1]
        stackTop && (stackTop[node.id.name] = {
            init: false,
            kind: 'let'
        })
        className = node.id.name
    }
    return () => {
        if(className){
            let scope = this.getCurrentScope()
            scope.lexDeclared[className].init = true
            scope.data[className] = classClosure()
        }
        return EmptyStatementReturn;
    };
}