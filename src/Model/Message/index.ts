export class ThrowError extends Error {}
export class ThrowSyntaxError extends SyntaxError {}
export class ThrowReferenceError extends ReferenceError {}
export class ThrowTypeError extends TypeError {}
export class InterruptThrowError extends ThrowError {}
export class InterruptThrowSyntaxError extends ThrowSyntaxError {}
export class InterruptThrowReferenceError extends ThrowReferenceError {}

interface Messages {
	UnknownError: MessageItem;
	ExecutionTimeOutError: MessageItem;
	NodeTypeSyntaxError: MessageItem;
	BinaryOperatorSyntaxError: MessageItem;
	LogicalOperatorSyntaxError: MessageItem;
	UnaryOperatorSyntaxError: MessageItem;
	UpdateOperatorSyntaxError: MessageItem;
	ObjectStructureSyntaxError: MessageItem;
	AssignmentExpressionSyntaxError: MessageItem;
	VariableTypeSyntaxError: MessageItem;
	ParamTypeSyntaxError: MessageItem;
	AssignmentTypeSyntaxError: MessageItem;
	FunctionUndefinedReferenceError: MessageItem;
	VariableUndefinedReferenceError: MessageItem;
	IsNotConstructor: MessageItem;
	LetVariableUseBeforeInitReferenceError: MessageItem;
	RedeclareBlockScopeVariableError: MessageItem;
	ConstNotInitError: MessageItem;
	ConstChangeError: MessageItem;
}

export type MessageItem = [
	number,
	string,
	new (message: string) => Error //typeof ThrowError | typeof InterruptThrowReferenceError | typeof ThrowReferenceError
];

export const Messages: Messages = {
	UnknownError: [3001, "%0", InterruptThrowError],
	ExecutionTimeOutError: [3002, "Script execution timed out after %0ms", InterruptThrowError],
	NodeTypeSyntaxError: [1001, "Unknown node type: %0", InterruptThrowReferenceError],
	BinaryOperatorSyntaxError: [1002, "Unknown binary operator: %0", InterruptThrowReferenceError],
	LogicalOperatorSyntaxError: [
		1003,
		"Unknown logical operator: %0",
		InterruptThrowReferenceError,
	],
	UnaryOperatorSyntaxError: [1004, "Unknown unary operator: %0", InterruptThrowReferenceError],
	UpdateOperatorSyntaxError: [1005, "Unknown update operator: %0", InterruptThrowReferenceError],
	ObjectStructureSyntaxError: [
		1006,
		"Unknown object structure: %0",
		InterruptThrowReferenceError,
	],
	AssignmentExpressionSyntaxError: [
		1007,
		"Unknown assignment expression: %0",
		InterruptThrowReferenceError,
	],
	VariableTypeSyntaxError: [1008, "Unknown variable type: %0", InterruptThrowReferenceError],
	ParamTypeSyntaxError: [1009, "Unknown param type: %0", InterruptThrowReferenceError],
	AssignmentTypeSyntaxError: [1010, "Unknown assignment type: %0", InterruptThrowReferenceError],
	FunctionUndefinedReferenceError: [2001, "%0 is not a function", ThrowReferenceError],
	VariableUndefinedReferenceError: [2002, "%0 is not defined", ThrowReferenceError],
	IsNotConstructor: [2003, "%0 is not a constructor", ThrowTypeError],
	LetVariableUseBeforeInitReferenceError: [2004, 'Cannot access \'%0\' before initialization', ThrowReferenceError],
	RedeclareBlockScopeVariableError: [2005, 'Cannot redeclare block-scoped variable \'%0\'', ThrowReferenceError],
	ConstNotInitError: [2006, 'const \'%0\' declarations must be initialized.', InterruptThrowError],
	ConstChangeError: [2007, 'Cannot assign to \'%0\' because it is a constant.', ThrowReferenceError],

};
