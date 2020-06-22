import * as handler from './handler'
import {Node} from '../Node'
import {ESTree} from '../Node'
import { Interpreter } from '../../interpreter/main';

export interface BaseClosure {
	(pNode?: Node): any;
	isFunctionDeclareClosure?: boolean;
}
export type CaseItem = {
	testClosure: BaseClosure;
	bodyClosure: BaseClosure;
};
export type SwitchCaseClosure = () => CaseItem;
export type ReturnStringClosure = () => string;

export class ClosureHandler {
    binaryExpressionHandler = handler.binaryExpressionHandler
    logicalExpressionHandler = handler.logicalExpressionHandler
    unaryExpressionHandler = handler.unaryExpressionHandler
    updateExpressionHandler = handler.updateExpressionHandler
    objectExpressionHandler = handler.objectExpressionHandler
	arrayExpressionHandler = handler.arrayExpressionHandler
    callExpressionHandler = handler.callExpressionHandler
    newExpressionHandler = handler.newExpressionHandler
    memberExpressionHandler = handler.memberExpressionHandler
    thisExpressionHandler = handler.thisExpressionHandler
    sequenceExpressionHandler = handler.sequenceExpressionHandler
    literalHandler = handler.literalHandler
    identifierHandler = handler.identifierHandler
    assignmentExpressionHandler = handler.assignmentExpressionHandler
    functionDeclarationHandler = handler.functionDeclarationHandler
    variableDeclarationHandler = handler.variableDeclarationHandler
    programHandler = handler.programHandler
	expressionStatementHandler = handler.expressionStatementHandler
	emptyStatementHandler = handler.emptyStatementHandler
	returnStatementHandler = handler.returnStatementHandler
	functionExpressionHandler = handler.functionExpressionHandler
	ifStatementHandler = handler.ifStatementHandler
	conditionalExpressionHandler = handler.conditionalExpressionHandler
	forStatementHandler = handler.forStatementHandler
	whileStatementHandler = handler.whileStatementHandler
	doWhileStatementHandler = handler.doWhileStatementHandler
	forInStatementHandler = handler.forInStatementHandler
	forOfStatementHandler = handler.forOfStatementHandler
	withStatementHandler = handler.withStatementHandler
	throwStatementHandler = handler.throwStatementHandler
	tryStatementHandler = handler.tryStatementHandler
	continueStatementHandler = handler.continueStatementHandler
	breakStatementHandler = handler.breakStatementHandler
	switchStatementHandler = handler.switchStatementHandler
	labeledStatementHandler = handler.labeledStatementHandler
	debuggerStatementHandler = handler.debuggerStatementHandler
	catchClauseHandler = handler.catchClauseHandler
	groupStatementHandler = handler.groupStatementHandler
	arrowFunctionExpressionHandler = handler.arrowFunctionExpressionHandler
	objectPatternAssignHandler = handler.objectPatternAssignHandler
	spreadElementHandler = handler.spreadElementHandler
	templateLiteralHandler = handler.templateLiteralHandler
	classDeclarationHandler = handler.classDeclarationHandler
	// classExpressionHandler = handler.classExpressionHandler

    protected getClosure(this: Interpreter, node: Node): BaseClosure|null {
		let closure: BaseClosure|null = null;

		switch (node.type) {
			case 'ClassDeclaration':
				closure = this.classDeclarationHandler(node);
				break
			// case 'ClassExpression':
			// 	closure = this.classExpressionHandler(node);
			// 	break;
			case "BinaryExpression":
				closure = this.binaryExpressionHandler(node);
				break;
			case "LogicalExpression":
				closure = this.logicalExpressionHandler(node);
				break;
			case "UnaryExpression":
				closure = this.unaryExpressionHandler(node);
				break;
			case "UpdateExpression":
				closure = this.updateExpressionHandler(node);
				break;
			case "ObjectExpression":
				closure = this.objectExpressionHandler(node);
				break;
			case "ArrayExpression":
				closure = this.arrayExpressionHandler(node);
				break;
			case "CallExpression":
				closure = this.callExpressionHandler(node);
				break;
			case "NewExpression":
				closure = this.newExpressionHandler(node);
				break;
			case "MemberExpression":
				closure = this.memberExpressionHandler(node);
				break;
			case "ThisExpression":
				closure = this.thisExpressionHandler(node);
				break;
			case "SequenceExpression":
				closure = this.sequenceExpressionHandler(node);
				break;
			case "Literal":
				closure = this.literalHandler(node);
				break;
			case "Identifier":
				closure = this.identifierHandler(node);
				break;
			case "AssignmentExpression":
				closure = this.assignmentExpressionHandler(node);
				break;
			case "FunctionDeclaration":
				closure = this.functionDeclarationHandler(node);
				break;
			case 'ArrowFunctionExpression':
				closure = this.arrowFunctionExpressionHandler(node);
				break;
			case 'SpreadElement':
				closure = this.spreadElementHandler(node);
				break;
			case "VariableDeclaration":
				closure = this.variableDeclarationHandler(node);
				break;
			case 'TemplateLiteral':
				closure = this.templateLiteralHandler(node);
				break;
			case "BlockStatement":
			case "Program":
				closure = this.programHandler(node);
				break;
			// groupStatement 是为了编译需要自己加的，为了将若干表达式聚合起来一起执行，但是又不单独生成blockScope
			// @ts-ignore
			case "GroupStatement":
				closure = this.groupStatementHandler(node)
				break;
			// let {name, ...rest} = obj的赋值，写成了一个handler方便一点，要拆解开的话rest不太好实现
			// @ts-ignore
			case "ObjectPatternAssignExpression":
				closure = this.objectPatternAssignHandler(node)
				break;
			case "ExpressionStatement":
				closure = this.expressionStatementHandler(node);
				break;
			case "EmptyStatement":
				closure = this.emptyStatementHandler(node);
				break;
			case "ReturnStatement":
				closure = this.returnStatementHandler(node);
				break;
			case "FunctionExpression":
				closure = this.functionExpressionHandler(node);
				break;
			case "IfStatement":
				closure = this.ifStatementHandler(node);
				break;
			case "ConditionalExpression":
				closure = this.conditionalExpressionHandler(node);
				break;
			case "ForStatement":
				closure = this.forStatementHandler(node);
				break;
			case "WhileStatement":
				closure = this.whileStatementHandler(node);
				break;
			case "DoWhileStatement":
				closure = this.doWhileStatementHandler(node);
				break;
			case 'ForOfStatement':
				closure = this.forOfStatementHandler(node);
				break;
			case "ForInStatement":
				closure = this.forInStatementHandler(node);
				break;
			case "WithStatement":
				closure = this.withStatementHandler(node);
				break;
			case "ThrowStatement":
				closure = this.throwStatementHandler(node);
				break;
			case "TryStatement":
				closure = this.tryStatementHandler(node);
				break;
			case "ContinueStatement":
				closure = this.continueStatementHandler(node);
				break;
			case "BreakStatement":
				closure = this.breakStatementHandler(node);
				break;
			case "SwitchStatement":
				closure = this.switchStatementHandler(node);
				break;
			case "LabeledStatement":
				closure = this.labeledStatementHandler(node);
				break;
			case "DebuggerStatement":
				closure = this.debuggerStatementHandler(node);
				break;
			default:
				break;
		}
        return closure;
	}

}

applyMixins(ClosureHandler, handler)

function applyMixins(derivedCtor: any, father: any) {
	Object.getOwnPropertyNames(father).forEach(name => {
		derivedCtor.prototype[name] = father[name];
    });
}