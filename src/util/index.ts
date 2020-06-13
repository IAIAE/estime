export function defineFunctionName<T>(func: T, name: string) {
	Object.defineProperty(func, "name", {
		value: name,
		writable: false,
		enumerable: false,
		configurable: true,
	});
}


export function isFunction<T>(func: T): boolean {
	return typeof func === "function";
}

export function noop() {}