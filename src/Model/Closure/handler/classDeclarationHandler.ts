
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'

// class Test {...}
export function classDeclarationHandler(this: Interpreter, node: ESTree.ClassDeclaration): BaseClosure {
    if (node.id) {
        // const classClosure = this.classExpressionHandler(node);
        // Object.defineProperty(classClosure, "isFunctionDeclareClosure", {
        //     value: true,
        //     writable: false,
        //     configurable: false,
        //     enumerable: false,
        // });
        // // class的本质也是function，直接申明一个函数名也没毛病
        // this.funcDeclaration(node.id.name, classClosure);
    }
    return () => {
        return EmptyStatementReturn;
    };

}