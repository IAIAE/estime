import Scope, { ScopeData, createScope } from '../Model/Scope'
import { Parser } from "acorn";
let MyParser = Parser.extend(
	require('acorn-class-fields'),
	require('acorn-static-class-features'),
)
import {
	Messages,
	MessageItem,
	InterruptThrowError,
	InterruptThrowReferenceError,
	InterruptThrowSyntaxError,
} from "../Model/Message";
import { Node, ESTree } from "../Model/Node";
import { ClosureHandler, BaseClosure, CaseItem, ReturnStringClosure, SwitchCaseClosure } from '../Model/Closure'
import { Break, Continue, DefaultCase, EmptyStatementReturn, GlobalScopeName, RootScopeName, SuperScopeName, WithScopeName, createSymbolFunc } from '../Model/Symbols'
import { BreakLabel, ContinueLabel, Return } from '../Model/TokenClass'
import { isFunction } from '../util'

const version = "%VERSION%";

/////////types/////////
type Getter = () => any;

type ECMA_VERSION = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020;

interface Options {
	ecmaVersion?: ECMA_VERSION;
	/**
	 * 沙箱执行超时时间
	 * 默认为0，不限制大小
	 */
	timeout?: number;
	/**
	 * 根作用域，沙箱环境中顶级作用域中访问的this变量，
	 * 例如，浏览器环境中的rootContext就是window
	 */
	rootContext?: Context | null;
	/**
	 * 方法中的根作用域，如果一个没有绑定this变量的方法被调用，
	 * 那么这个方法中的this访问是什么呢？通过这个配置指定
	 * ```javascript
	 * function func(){
	 * 		return this;
	 * }
	 * func()
	 * ```
	 */
	globalContextInFunction?: any;

	/**
	 * 在一个Interpreter实例化之后立即执行
	 * 可以用来自定义这个Interpreter实例的任何操作，高阶用法
	 * 最常用的，你可以console一下这个实例的globalScope。会加深对这个沙箱环境的理解
	 */
	_initEnv?: (this: Interpreter) => void;
}


interface CollectDeclarations {
	[key: string]: undefined | BaseClosure;
}

/**
 * 词法环境
 */
type LexContext = {
	[key: string]: {
		kind: 'const' | 'let'
		init: boolean
	}
}

type Context = {
	[prop: string]: any;
	[prop: number]: any;
};

interface GeneratorReflection {
	getOptions(): Readonly<Options>;
	getCurrentScope(): Scope;
	getGlobalScope(): Scope;
	getCurrentContext(): Context;
	getExecStartTime(): number;
}

export function internalFunction(
	reflection: InternalInterpreterReflection,
	...params: string[]
): (...args: any[]) => any {
	if (!(reflection instanceof InternalInterpreterReflection)) {
		throw new Error("Illegal call");
	}

	const instance = reflection.generator();

	const code = params.pop();

	const interpreter = new Interpreter(instance.getGlobalScope(), instance.getOptions());

	const wrapCode = `
		    (function anonymous(${params.join(",")}){
		        ${code}
		    });
		    `;

	return interpreter.evaluate(wrapCode);
}
Object.defineProperty(internalFunction, "__IS_FUNCTION_FUNC", {
	value: true,
	writable: false,
	enumerable: false,
	configurable: false,
});

export class InternalInterpreterReflection {
	protected interpreter: Interpreter;
	constructor(interpreter: Interpreter) {
		this.interpreter = interpreter;
	}

	generator(): GeneratorReflection {
		const interpreter = this.interpreter;

		function getCurrentScope(this: Interpreter) {
			return this.getCurrentScope();
		}

		function getGlobalScope(this: Interpreter) {
			return this.getGlobalScope();
		}

		function getCurrentContext(this: Interpreter) {
			return this.getCurrentContext();
		}

		return {
			getOptions: interpreter.getOptions.bind(interpreter),
			getCurrentScope: getCurrentScope.bind(interpreter),
			getGlobalScope: getGlobalScope.bind(interpreter),
			getCurrentContext: getCurrentContext.bind(interpreter),
			getExecStartTime: interpreter.getExecStartTime.bind(interpreter),
		};
	}
}


function internalEval(
	reflection: InternalInterpreterReflection,
	code?: string,
	useGlobalScope: boolean = true
): any {
	if (!(reflection instanceof InternalInterpreterReflection)) {
		throw new Error("Illegal call");
	}

	if (typeof code !== "string") return code;
	if (!code) return void 0;

	const instance = reflection.generator();

	const opts = instance.getOptions();

	const options: Options = {
		timeout: opts.timeout,
		_initEnv: function (this: Interpreter) {
			// set caller context
			if (!useGlobalScope) {
				this.setCurrentContext(instance.getCurrentContext());
			}
			// share timeout
			this.execStartTime = instance.getExecStartTime();
			this.execEndTime = this.execStartTime;
		},
	};

	const currentScope = useGlobalScope ? instance.getGlobalScope() : instance.getCurrentScope();
	const interpreter = new Interpreter(currentScope, options);

	return interpreter.evaluate(code);
}
Object.defineProperty(internalEval, "__IS_EVAL_FUNC", {
	value: true,
	writable: false,
	enumerable: false,
	configurable: false,
});




/**
 * scope chain
 *
 * superScope
 *     ↓
 * rootScope
 *     ↓
 * globalScope
 *     ↓
 * functionScope
 *
 */



function createRootContext(data: Context): Context {
	return Object.create(data);
}

const BuildInObjects: ScopeData = {
	NaN,
	Infinity,
	undefined,
	// null,
	Object,
	Array,
	String,
	Boolean,
	Number,
	Date,
	RegExp,
	Error,
	URIError,
	TypeError,
	RangeError,
	SyntaxError,
	ReferenceError,
	Math,
	parseInt,
	parseFloat,
	isNaN,
	isFinite,
	decodeURI,
	decodeURIComponent,
	encodeURI,
	encodeURIComponent,
	escape,
	unescape,
	eval: internalEval,
	Function: internalFunction,
};
// ES5 Object
if (typeof JSON !== "undefined") {
	BuildInObjects.JSON = JSON;
}

//ES6 Object
if (typeof Promise !== "undefined") {
	BuildInObjects.Promise = Promise;
}

if (typeof Set !== "undefined") {
	BuildInObjects.Set = Set;
}

if (typeof Map !== "undefined") {
	BuildInObjects.Map = Map;
}

if (typeof Symbol !== "undefined") {
	BuildInObjects.Symbol = Symbol;
}

if (typeof Proxy !== "undefined") {
	BuildInObjects.Proxy = Proxy;
}

if (typeof WeakMap !== "undefined") {
	BuildInObjects.WeakMap = WeakMap;
}

if (typeof WeakSet !== "undefined") {
	BuildInObjects.WeakSet = WeakSet;
}

if (typeof Reflect !== "undefined") {
	BuildInObjects.Reflect = Reflect;
}

export class Interpreter extends ClosureHandler {
	static readonly version: string = version;
	static readonly eval = internalEval;
	static readonly Function = internalFunction;
	// 默认切换到2018，支持解构
	static ecmaVersion: ECMA_VERSION = 2018;
	// alert.call(globalContextInFunction, 1);
	// fix: alert.call({}, 1); // Illegal invocation
	// function func(){
	//     this;// Interpreter.globalContextInFunction
	// }
	// func()
	static globalContextInFunction: any = void 0;
	static global: Context = Object.create(null);

	// last expression value
	protected value: any;
	protected context: Context | Scope;
	protected globalContext: Context;
	protected source: string;
	protected sourceList: string[] = [];
	protected currentScope: Scope;
	protected globalScope: Scope;
	protected currentContext: Context;
	protected options: Options;
	protected callStack: string[];
	// 编译时存放变量提升的var和function
	protected collectDeclVars: CollectDeclarations = Object.create(null);
	protected collectDeclFuncs: CollectDeclarations = Object.create(null);
	// 编译时存放块级作用域的层级结构的声明，用于判断var声明时候是否非法（var的申明可以覆盖var，但是不能覆盖let等块级声明）
	protected collectDeclLex: LexContext[] = []
	/**
	 * 用于临时存放函数声明的scope，函数声明执行时会用它更新函数体
	 */
	protected _functionVarScope: Scope
	protected isVarDeclMode: boolean = false;

	protected lastExecNode: Node | null = null;

	protected isRunning: boolean = false;
	protected execStartTime: number;
	protected execEndTime: number;

	constructor(context: Context | Scope = Interpreter.global, options: Options = {}) {
		super()
		this.options = {
			ecmaVersion: options.ecmaVersion || Interpreter.ecmaVersion,
			timeout: options.timeout || 0,
			rootContext: options.rootContext,
			globalContextInFunction:
				options.globalContextInFunction === undefined
					? Interpreter.globalContextInFunction
					: options.globalContextInFunction,
			_initEnv: options._initEnv,
		};

		this.context = context || Object.create(null);
		this.callStack = [];
		// console.info('this i s ', this )
		this.initEnvironment(this.context);
	}

	/**
	 * 初始化全局执行环境
	 * @param ctx
	 */
	protected initEnvironment(ctx: Context | Scope) {
		let scope: Scope;
		//init global scope
		if (ctx instanceof Scope) {
			scope = ctx;
		} else {
			let rootScope: Scope | null = null;
			const superScope = this.createSuperScope(ctx);

			if (this.options.rootContext) {
				rootScope = new Scope(
					createRootContext(this.options.rootContext),
					superScope,
					RootScopeName
				);
			}

			scope = new Scope(ctx, rootScope || superScope, GlobalScopeName);
		}

		this.globalScope = scope;
		// 顶级作用域嵌入mock的Symbol方法。
		this.globalScope.data['Symbol'] = createSymbolFunc()
		this.currentScope = this.globalScope;
		//init global context to this
		this.globalContext = scope.data;
		this.currentContext = scope.data;
		// collect var/function declare
		this.collectDeclVars = Object.create(null);
		this.collectDeclFuncs = Object.create(null);
		this.collectDeclLex = []

		this.execStartTime = Date.now();
		this.execEndTime = this.execStartTime;

		const _initEnv = this.options._initEnv;
		if (_initEnv) {
			_initEnv.call(this);
		}
	}

	/**
	 * 包含块级作用域的语句声明之前执行。创建一个新的hash，记录块作用域内声明的let/const变量
	 */
	protected blockDeclareStart() {
		this.collectDeclLex.push(Object.create(null))
	}

	/**
	 * 包含块级作用域的语句声明之后执行，退栈，获取该块作用域声明的let/const变量
	 */
	protected blockDeclareEnd(): LexContext | null {
		// 准备块级作用域初始化必要参数
		let lexDeclInThisBlock = this.collectDeclLex.pop()
		let lexDeclared: LexContext | null;
		let lexNames = Object.getOwnPropertyNames(lexDeclInThisBlock)
		if (lexNames.length) {
			lexDeclared = Object.create(null)
			lexNames.forEach(key => {
				lexDeclared![key] = {
					init: false,
					kind: lexDeclInThisBlock![key].kind
				}
			})
		} else {
			// 说明没有词法变量，那就不用新建作用域了
			lexDeclared = null
		}
		return lexDeclared
	}

	getExecStartTime() {
		return this.execStartTime;
	}

	getExecutionTime(): number {
		return this.execEndTime - this.execStartTime;
	}

	setExecTimeout(timeout: number = 0) {
		this.options.timeout = timeout;
	}

	getOptions(): Readonly<Options> {
		return this.options;
	}

	protected getGlobalScope() {
		return this.globalScope;
	}

	protected getCurrentScope() {
		return this.currentScope;
	}

	protected getCurrentContext() {
		return this.currentContext;
	}

	protected isInterruptThrow<T>(err: T): boolean {
		return (
			err instanceof InterruptThrowError ||
			err instanceof InterruptThrowReferenceError ||
			err instanceof InterruptThrowSyntaxError
		);
	}

	protected createSuperScope(ctx: Context): Scope {
		let data: ScopeData = {
			...BuildInObjects,
		};

		const buildInObjectKeys = Object.keys(data);

		buildInObjectKeys.forEach(key => {
			if (key in ctx) {
				delete data[key];
			}
		});

		return new Scope(data, null, SuperScopeName);
	}

	protected setCurrentContext(ctx: Context) {
		this.currentContext = ctx;
	}

	protected setCurrentScope(scope: Scope) {
		this.currentScope = scope;
	}

	evaluate(code: string = "") {
		let node: unknown;

		if (!code) return;

		node = MyParser.parse(code, {
			ranges: true,
			locations: true,
			ecmaVersion: this.options.ecmaVersion || Interpreter.ecmaVersion,
		});

		return this.evaluateNode(node as ESTree.Program, code);
	}

	appendCode(code: string) {
		return this.evaluate(code);
	}

	protected evaluateNode(node: ESTree.Program, source: string = "") {
		this.value = void 0;
		this.source = source;
		this.sourceList.push(source);

		this.isRunning = true;

		//reset timeout
		this.execStartTime = Date.now();
		this.execEndTime = this.execStartTime;

		// reset
		this.collectDeclVars = Object.create(null);
		this.collectDeclFuncs = Object.create(null);
		this.collectDeclLex = []

		const currentScope = this.getCurrentScope();
		const currentContext = this.getCurrentContext();
		const labelStack = currentScope.labelStack.concat([]);
		const callStack: string[] = this.callStack.concat([]);
		const reset = () => {
			this.setCurrentScope(currentScope); //reset scope
			this.setCurrentContext(currentContext); //reset context
			currentScope.labelStack = labelStack; //reset label stack
			this.callStack = callStack; //reset call stack
		};

		// start run
		try {
			const bodyClosure = this.createClosure(node);
			// add declares to data
			this.addDeclarationsToScope(
				this.collectDeclVars,
				this.collectDeclFuncs,
				this.getCurrentScope()
			);
			let currScope = this.getCurrentScope()
			this._functionVarScope = currScope
			bodyClosure();
		} catch (e) {
			throw e;
		} finally {
			reset();
			this.execEndTime = Date.now();
		}

		this.isRunning = false;

		return this.getValue();
	}

	protected createErrorMessage(
		msg: MessageItem,
		value: string | number,
		node?: Node | null
	): string {
		let message = msg[1].replace("%0", String(value));

		if (node !== null) {
			message += this.getNodePosition(node || this.lastExecNode);
		}

		return message;
	}

	protected createError<T>(message: string, error: { new(msg: string): T }): T {
		return new error(message);
	}

	protected createThrowError<T>(message: string, error: { new(msg: string): T }): T {
		return this.createError(message, error);
	}

	protected createInternalThrowError<T extends MessageItem>(
		msg: T,
		value: string | number,
		node?: Node | null
	) {
		return this.createError(this.createErrorMessage(msg, value, node), msg[2]);
	}

	protected checkTimeout() {
		if (!this.isRunning) return false;

		const timeout = this.options.timeout || 0;

		const now = Date.now();
		if (now - this.execStartTime > timeout) {
			return true;
		}

		return false;
	}

	protected getNodePosition(node: (Node & { start?: number; end?: number }) | null) {
		if (node) {
			const errorCode = ""; //this.source.slice(node.start, node.end);
			return node.loc ? ` [${node.loc.start.line}:${node.loc.start.column}]${errorCode}` : "";
		}

		return "";
	}


	protected createClosure(node: ESTree.Node): BaseClosure {
		let closure = this.getClosure(node)
		if (!closure) {
			throw this.createInternalThrowError(Messages.NodeTypeSyntaxError, node.type, node);
		}
		return (...args: any[]) => {
			const timeout = this.options.timeout;

			if (timeout && timeout > 0 && this.checkTimeout()) {
				throw this.createInternalThrowError(Messages.ExecutionTimeOutError, timeout, null);
			}

			this.lastExecNode = node;

			return closure!(...args);
		};
	}

	// protected isRootScope(node: ESTree.Expression | ESTree.Pattern): boolean {
	// 	if (node.type === "Identifier") {
	// 		const scope = this.getScopeFromName(node.name, this.getCurrentScope());
	// 		return scope.name === "rootScope";
	// 	}

	// 	return false;
	// }


	protected safeObjectGet(obj: any, key: any, node: Node) {
		return obj[key];
	}


	/**
	 * @param node
	 */
	protected createCallFunctionGetter(node: Node & { start?: number; end?: number }) {
		switch (node.type) {
			case "MemberExpression":
				const objectGetter = this.createClosure(node.object);
				const keyGetter = this.createMemberKeyGetter(node);
				const source = this.source;

				return () => {
					const obj = objectGetter();
					const key = keyGetter();
					const func = this.safeObjectGet(obj, key, node);

					if (!func || !isFunction(func)) {
						const name = source.slice(node.start, node.end);
						throw this.createInternalThrowError(
							Messages.FunctionUndefinedReferenceError,
							name,
							node
						);
					}

					// obj.eval = eval
					// obj.eval(...)
					if (func.__IS_EVAL_FUNC) {
						return (code?: string) => {
							return (func as typeof internalEval)(
								new InternalInterpreterReflection(this),
								code,
								true
							);
						};
					}

					// obj.func = Function
					// obj.func(...)
					if (func.__IS_FUNCTION_FUNC) {
						return (...args: string[]) => {
							return (func as typeof internalFunction)(
								new InternalInterpreterReflection(this),
								...args
							);
						};
					}

					// method call
					// eg：obj.say(...)
					// eg: obj.say.call(...)
					// eg: obj.say.apply(...)
					// ======================
					// obj.func(...)
					// func = func.bind(obj)
					// tips:
					// func(...) -> func.bind(obj)(...)
					// func.call(...) -> obj.func.call.bind(obj.func)(...)
					// func.apply(...) -> obj.func.apply.bind(obj.func)(...)
					// ...others
					return func.bind(obj);
				};
			default:
				// test() or (0,test)() or a[1]() ...
				const closure = this.createClosure(node);
				return () => {
					let name: string = "";
					if (node.type === "Identifier") {
						name = node.name;
					}
					// console.info('the scope is ', this.getCurrentScope())
					// const name: string = (<ESTree.Identifier>node).name;
					const func = closure();

					if (!func || !isFunction(func)) {
						throw this.createInternalThrowError(
							Messages.FunctionUndefinedReferenceError,
							name,
							node
						);
					}

					// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
					// var eval = eval;
					// function test(){
					//    eval(...); //note: use local scope in eval5，but in Browser is use global scope
					// }
					if (node.type === "Identifier" && func.__IS_EVAL_FUNC && name === "eval") {
						return (code?: string) => {
							const scope = this.getScopeFromName(name, this.getCurrentScope());
							const useGlobalScope =
								scope.name === SuperScopeName ||
								// !scope.parent || // super scope
								scope.name === GlobalScopeName ||
								// this.globalScope === scope ||
								scope.name === RootScopeName;
							// use local scope if calling eval in super scope
							return (func as typeof internalEval)(
								new InternalInterpreterReflection(this),
								code,
								!useGlobalScope
							);
						};
					}
					// use global scope
					// var g_eval = eval;
					// g_eval("a+1");
					//(0,eval)(...) ...eval alias
					if (func.__IS_EVAL_FUNC) {
						return (code?: string) => {
							return (func as typeof internalEval)(
								new InternalInterpreterReflection(this),
								code,
								true
							);
						};
					}

					// Function('a', 'b', 'return a+b')
					if (func.__IS_FUNCTION_FUNC) {
						return (...args: string[]) => {
							return (func as typeof internalFunction)(
								new InternalInterpreterReflection(this),
								...args
							);
						};
					}

					let ctx = this.options.globalContextInFunction;
					// with(obj) {
					//     test() // test.call(obj, ...)
					// }
					if (node.type === "Identifier") {
						const scope = this.getIdentifierScope(node);
						if (scope.name === WithScopeName) {
							ctx = scope.data;
						}
					}

					// function call
					// this = undefined
					// tips:
					// test(...) === test.call(undefined, ...)
					// fix: alert.call({}, ...) Illegal invocation
					return func.bind(ctx);
				};
		}
	}

	protected getIdentifierScope(node: ESTree.Identifier) {
		const currentScope = this.getCurrentScope();

		const scope = this.getScopeFromName(node.name, currentScope);

		return scope;
	}


	protected getVariableName(node: ESTree.Pattern): never | string {
		if (node.type === "Identifier") {
			return node.name;
		} else {
			throw this.createInternalThrowError(Messages.VariableTypeSyntaxError, node.type, node);
		}
	}

	/**
	 * 保证变量的访问只能在沙箱内部的。如果一个变量没有找到，会默认返回globalScope。
	 * 那么如果globalScope如果不存在name的变量，就throw Error
	 * @param data 作用域data
	 * @param name Identifier标识符
	 * @param node AST: Identifier Node
	 */
	protected assertVariable(data: ScopeData, name: string, node: Node): void | never {
		if (data === this.globalScope.data && !(name in data)) {
			throw this.createInternalThrowError(
				Messages.VariableUndefinedReferenceError,
				name,
				node
			);
		}
	}

	// get es3/5 param name
	protected createParamNameGetter(node: ESTree.Pattern): ReturnStringClosure {
		if (node.type === "Identifier") {
			return () => node.name;
		} else if (node.type === 'RestElement') {
			return this.createParamNameGetter(node.argument)
		} else {
			throw this.createInternalThrowError(Messages.ParamTypeSyntaxError, node.type, node);
		}
	}

	protected createObjectKeyGetter(node: ESTree.Expression): Getter {
		let getter: Getter;
		// var obj = { title: "" }
		if (node.type === "Identifier") {
			getter = () => node.name;
		} else {
			// Literal or ...
			// var obj = { "title": "" } or others...
			getter = this.createClosure(node);
		}

		return function () {
			return getter();
		};
	}

	protected createMemberKeyGetter(node: ESTree.MemberExpression): Getter {
		// s['a'];  node.computed = true
		// s.foo;  node.computed = false
		return node.computed
			? this.createClosure(node.property)
			: this.createObjectKeyGetter(node.property);
	}

	/**
	 * 如果一个变量作为左值调用，用这个Getter，主要是判断了const
	 * 不是作为左值调用，用createObjectGetter即可
	 * @param node
	 */
	protected createLeftObjectGetter(node: ESTree.Expression | ESTree.Pattern): Getter {
		switch (node.type) {
			case 'Identifier':
				return () => {
					let name = node.name
					let scope = this.getScopeFromName(name, this.getCurrentScope(), true)
					if (scope.lexDeclared && scope.lexDeclared[name] && scope.lexDeclared[name].kind == 'const') {
						if (scope.lexDeclared[name].init === false) {
							scope.lexDeclared[name].init = true
						} else {
							// console.info('node ====> ', node, scope)
							throw this.createInternalThrowError(
								Messages.ConstChangeError,
								name,
								node
							)
						}
					}
					return scope.data
				}
			case "MemberExpression":
				return this.createClosure(node.object);
			default:
				throw this.createInternalThrowError(
					Messages.AssignmentTypeSyntaxError,
					node.type,
					node
				);
		}
	}

	// for UnaryExpression UpdateExpression AssignmentExpression
	protected createObjectGetter(node: ESTree.Expression | ESTree.Pattern): Getter {
		switch (node.type) {
			case "Identifier":
				return () => this.getScopeDataFromName(node.name, this.getCurrentScope());
			case "MemberExpression":
				return this.createClosure(node.object);
			default:
				throw this.createInternalThrowError(
					Messages.AssignmentTypeSyntaxError,
					node.type,
					node
				);
		}
	}

	// for UnaryExpression UpdateExpression AssignmentExpression
	protected createNameGetter(node: ESTree.Expression | ESTree.Pattern): Getter {
		switch (node.type) {
			case "Identifier":
				return () => node.name;
			case "MemberExpression":
				return this.createMemberKeyGetter(node);
			default:
				throw this.createInternalThrowError(
					Messages.AssignmentTypeSyntaxError,
					node.type,
					node
				);
		}
	}

	// 创建closure的时候就会注册变量，等于是完成了变量和函数声明的提前操作
	protected varDeclaration(name: string): void {
		const context = this.collectDeclVars;
		context[name] = undefined;
	}

	protected funcDeclaration(name: string, func: () => any): void {
		const context = this.collectDeclFuncs;
		context[name] = func;
	}

	/**
	 * 在当前词法作用域下声明一个词法变量。这里的声明在词法作用域下是提升的，为的是鉴别未初始化之前对词法变量的访问。
	 * 如果一个词法变量init:false,说明这个词法变量在该作用域内是存在的，但是还未初始化，访问它就是非法的。
	 * @param name
	 */
	// protected lextDeclaration(name: string): void {
	// 	// 声明的时候只可能出现在一个块级作用域的初始状态
	// 	let blockContext = this.lexContext[this.lexContext.length - 1]
	// 	blockContext[name] = {
	// 		init: false,
	// 		val: void 0,
	// 	}
	// }

	/**
	 * 将实现扫描得到的变量声明和函数申明提前放到scope.data中
	 * 注意变量的声明放进去的值只是undefined
	 * @param declVars
	 * @param declFuncs
	 * @param scope
	 */
	protected addDeclarationsToScope(
		declVars: CollectDeclarations,
		declFuncs: CollectDeclarations,
		scope: Scope
	) {
		const scopeData = scope.data;

		for (let key in declFuncs) {
			const value = declFuncs[key];
			scopeData[key] = value ? value() : value;
		}

		for (let key in declVars) {
			if (!(key in scopeData)) {
				scopeData[key] = void 0;
			}
		}
	}

	protected getScopeValue(name: string, startScope: Scope): any {
		const scope = this.getScopeFromName(name, startScope);
		return scope.data[name];
	}

	protected getScopeDataFromName(name: string, startScope: Scope) {
		return this.getScopeFromName(name, startScope).data;
	}

	/**
	 * 从当前scope从下往上找，如果当前scope.type=='block'，
	 * 先确保scope.lexDeclared[name]是否为false，
	 * 如果为false，说明这个块变量没有初始化，直接报错就行了
	 * 如果为true，再去scope.data里面找
	 * 如果scope.type=='function'，直接去scope.data里面找。
	 * @param name
	 * @param startScope
	 */
	protected getScopeFromName(name: string, startScope: Scope, constInit?: true) {
		let scope: Scope | null = startScope;

		do {
			if (scope.type == 'block') {
				if (!scope.lexDeclared[name]) {
					// 按理说，一个blockscope上的所有变量都标记在lexDeclared中，也有例外情况，
					// 比如catch(e){}中，变量e会零时插入，且lexDeclared上也不会有标记
					if (name in scope.data) {
						return scope
					}
					// 否则向上找
				} else {
					if (scope.lexDeclared[name].init === false) {
						if (constInit && scope.lexDeclared[name].kind == 'const') {
							// const变量初始化的时候这个校验位还没有置为true，放行
							return scope
						}
						throw this.createInternalThrowError(
							Messages.LetVariableUseBeforeInitReferenceError,
							name,
						);
					} else if (scope.lexDeclared[name].init === true) {
						return scope
					}
					// 否则向上找
				}
			} else {
				// function scope
				// 函数级别的作用域也可能有lexDeclared
				if (scope.lexDeclared && scope.lexDeclared[name] && scope.lexDeclared[name].init === false) {
					throw this.createInternalThrowError(
						Messages.LetVariableUseBeforeInitReferenceError,
						name
					)
				}
				if (name in scope.data) {
					//if (hasOwnProperty.call(scope.data, name)) {
					return scope;
				}
				// 否则向上找
			}
		} while ((scope = scope.parent));

		return this.globalScope;
	}
	protected entryBlockScope(newScope: Scope): Scope {
		const prevScope = this.getCurrentScope();
		// 函数执行时，创建新的scope，然后下一行将程序的运行指针指向新的scope
		this.setCurrentScope(newScope);
		// blockScope不用赋值新的提升变量
		// self.addDeclarationsToScope(declVars, declFuncs, currentScope);
		return prevScope
	}
	protected setValue(value: any) {
		const isFunctionCall = this.callStack.length;

		if (
			this.isVarDeclMode ||
			isFunctionCall ||
			value === EmptyStatementReturn ||
			value === Break ||
			value === Continue ||
			value instanceof BreakLabel ||
			value instanceof ContinueLabel
		) {
			return value;
		}

		this.value = value instanceof Return ? value.value : value;

		return value;
	}

	getValue() {
		return this.value;
	}
}