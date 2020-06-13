
import { Node, ESTree } from "../../Node";
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import Scope, {ScopeData, } from '../../Scope'
import {WithScopeName} from '../../Symbols'


export function withStatementHandler(this: Interpreter, node: ESTree.WithStatement): BaseClosure {
    const objectClosure = this.createClosure(node.object);
    const bodyClosure = this.createClosure(node.body);

    return () => {
        const data = objectClosure() as ScopeData;
        const currentScope = this.getCurrentScope();
        const newScope = new Scope(data, currentScope, WithScopeName);

        // const data = objectClosure();
        // copy all properties
        // for (let k in data) {
        // 	newScope.data[k] = data[k];
        // }

        this.setCurrentScope(newScope);

        // save last value
        const result = this.setValue(bodyClosure());

        this.setCurrentScope(currentScope);

        return result;
    };
}