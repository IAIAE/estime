export class Return {
	value: any;
	constructor(value: any) {
		this.value = value;
	}
}

export class BreakLabel {
	value: string;
	constructor(value: string) {
		this.value = value;
	}
}

export class ContinueLabel {
	value: string;
	constructor(value: string) {
		this.value = value;
	}
}