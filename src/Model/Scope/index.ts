type ScopeType = 'block' | 'function'

export default class Scope {
	readonly name: string | undefined | Symbol;
	readonly parent: Scope | null;
	readonly data: ScopeData;
	type: ScopeType
	labelStack: string[];
	lexDeclared: {
		[key: string]: {
			kind: 'const' | 'let'
			init: boolean
		}
	}
	constructor(data: ScopeData, parent: Scope | null = null, name?: string | Symbol, type: ScopeType = 'function') {
		this.name = name;
		this.parent = parent;
		this.data = data;
		this.labelStack = [];
		this.type = type
		this.lexDeclared = Object.create(null)
	}
}

export type ScopeData = {
	[prop: string]: any;
	[prop: number]: any;
};

export function createScope(parent: Scope | null = null, name?: string, type:ScopeType = 'function'): Scope {
	return new Scope(Object.create(null), parent, name, type);
}