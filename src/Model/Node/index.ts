import * as ESTree from "estree";
import * as jsx from 'estree-jsx'
export { ESTree };

export type Node =
	| ESTree.Node
	| ESTree.BinaryExpression
	| ESTree.LogicalExpression
	| ESTree.UnaryExpression
	| ESTree.UpdateExpression
	| ESTree.ObjectExpression
	| ESTree.ArrayExpression
	| ESTree.CallExpression
	| ESTree.NewExpression
	| ESTree.MemberExpression
	| ESTree.ThisExpression
	| ESTree.SequenceExpression
	| ESTree.Literal
	| ESTree.Identifier
	| ESTree.AssignmentExpression
	| ESTree.FunctionDeclaration
	| ESTree.VariableDeclaration
	| ESTree.BlockStatement
	| ESTree.Program
	| ESTree.ExpressionStatement
	| ESTree.EmptyStatement
	| ESTree.ReturnStatement
	| ESTree.FunctionExpression
	| ESTree.IfStatement
	| ESTree.ConditionalExpression
	| ESTree.ForStatement
	| ESTree.WhileStatement
	| ESTree.DoWhileStatement
	| ESTree.ForInStatement
	| ESTree.WithStatement
	| ESTree.ThrowStatement
	| ESTree.TryStatement
	| ESTree.ContinueStatement
	| ESTree.BreakStatement
	| ESTree.SwitchStatement
	| ESTree.SwitchCase
	| ESTree.LabeledStatement
	| ESTree.DebuggerStatement
	| jsx.JSXElement
	| jsx.JSXExpressionContainer
	| jsx.JSXIdentifier
	| JSXMemberExpression
	| jsx.JSXOpeningElement
	| jsx.JSXSpreadAttribute
	| jsx.JSXText
	| jsx.JSXAttribute
	| jsx.JSXEmptyExpression

/**
 * 官方库偷懒，只能自己声明一遍
 */
export interface JSXMemberExpression extends jsx.JSXMemberExpression {
	start?: number
	end?: number
	object: jsx.JSXIdentifier | JSXMemberExpression
	property: jsx.JSXIdentifier
}