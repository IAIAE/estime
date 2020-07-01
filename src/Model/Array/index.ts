import { EIterator } from '../Iterator'
import { thisExpressionHandler } from '../Closure/handler';


export function createArrayClass(Smbl):any {
    /**
     * 这个是对Array的封装
     * 为什么要这么做，请看issue：https://github.com/IAIAE/estime/issues/5
     */
    // @ts-ignore
    class MyArray extends Array {

        static isArray(val: any) {
            return val instanceof MyArray
        }
        static _Smbl: any
        // 一个沙箱env初始化后，会分配一个Smbl，用这个方法传给MyArray。一些实例方法(entries等)会用到
        static _setSmbl(Smbl) {
            this._Smbl = Smbl
        }
        static from = (function () {
            var toStr = Object.prototype.toString;
            var isCallable = function (fn) {
                return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
            };
            var toInteger = function (value) {
                var number = Number(value);
                if (isNaN(number)) { return 0; }
                if (number === 0 || !isFinite(number)) { return number; }
                return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };
            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function (value) {
                var len = toInteger(value);
                return Math.min(Math.max(len, 0), maxSafeInteger);
            };

            // The length property of the from method is 1.
            return function from(arrayLike/*, mapFn, thisArg */) {

                // 2. Let items be ToObject(arrayLike).
                var items = Object(arrayLike);

                // 3. ReturnIfAbrupt(items).
                if (arrayLike == null) {
                    throw new TypeError('Array.from requires an array-like object - not null or undefined');
                }

                // 4. If mapfn is undefined, then let mapping be false.
                var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                var T;
                if (typeof mapFn !== 'undefined') {
                    // 5. else
                    // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                    if (!isCallable(mapFn)) {
                        throw new TypeError('Array.from: when provided, the second argument must be a function');
                    }

                    // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                    if (arguments.length > 2) {
                        T = arguments[2];
                    }
                }

                // 10. Let lenValue be Get(items, "length").
                // 11. Let len be ToLength(lenValue).
                var len = toLength(items.length);

                // 13. If IsConstructor(C) is true, then
                // 13. a. Let A be the result of calling the [[Construct]] internal method
                // of C with an argument list containing the single item len.
                // 14. a. Else, Let A be ArrayCreate(len).
                var A = new MyArray(len)

                // 16. Let k be 0.
                var k = 0;
                // 17. Repeat, while k < len… (also steps a - h)
                var kValue;
                while (k < len) {
                    kValue = items[k];
                    if (mapFn) {
                        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                    k += 1;
                }
                // 18. Let putStatus be Put(A, "length", len, true).
                A.length = len;
                // 20. Return A.
                return A;
            };
        }());
        static of() {
            return MyArray.prototype.slice.call(arguments)
        }

    }

    Object.defineProperty(MyArray.prototype, '__nativeNewFunc', {
        value: function(name: string, args) {
            return Array.prototype[name].apply(this, args)
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })
    Object.defineProperty(MyArray.prototype, '__nativeFunc', {
        value: function(name: string, args) {
            return Array.prototype[name].apply(this, args)
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })
    Object.defineProperty(MyArray.prototype, 'copyWithin', {
        value: function(...args) {
            if (!Array.prototype.copyWithin) {
                let target = args[0]
                if(target==null || +target !== target){
                    throw new TypeError('fist param of copyWithin must be number')
                }
                target = formatStart(target, this.length)
                let start = formatStart(args[1], this.length)
                let end = formatEnd(args[2], this.length)
                if(target == this.length) return this
                let arr = this.slice(start, end)
                for(let i=0;i<arr.length;i++){
                    if(target+i >= this.length) break;
                    this[target+i] = arr[i]
                }
                return this
            } else {
                return this.__nativeNewFunc('copyWithin', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    Object.defineProperty(MyArray.prototype, 'fill', {
        value: function(...args) {
            if (!Array.prototype.fill) {
                let val = args[0]
                let start = formatStart(args[1], this.length)
                let end = formatEnd(args[2], this.length)
                for(let i=start; i<end; i++){
                    this[i] = val
                }
                return this
            } else {
                return this.__nativeFunc('fill', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    Object.defineProperty(MyArray.prototype, 'find', {
        value: function(...args) {
            if (!Array.prototype.find) {
                let func = args[0]
                if (typeof func != 'function') {
                    throw new TypeError(args[0] + ' is not a function')
                }
                let res;
                for (let i = 0; i < this.length; i++) {
                    if (func(this[i], i, this)) {
                        res = this[i]
                        break
                    }
                }
                return res;
            } else {
                return this.__nativeFunc('find', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    /**
     * 找到第一个匹配元素的下标
     * @param args
     */
    Object.defineProperty(MyArray.prototype, 'findIndex', {
        value: function(...args) {
            if (!Array.prototype.findIndex) {
                let func = args[0]
                if (typeof func != 'function') {
                    throw new TypeError(func + ' is not a function')
                }
                let res = -1;
                for (let i = 0; i < this.length; i++) {
                    if (func(this[i], i, this)) {
                        res = i
                        break
                    }
                }
                return res;
            } else {
                return this.__nativeFunc('findIndex', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    /**
     * 从后往前遍历，找到最后一个匹配元素的下标
     * @param args
     */
    Object.defineProperty(MyArray.prototype, 'lastIndexOf', {
        value: function(...args) {
            if (!Array.prototype.lastIndexOf) {
                let searchElement = args[0]
                let fromIndex = args[2]
                if (+fromIndex !== fromIndex) {
                    throw new TypeError(fromIndex + ' is not a number')
                }
                let len = this.length
                if (fromIndex >= 0) {
                    fromIndex = Math.min(len - 1, fromIndex)
                } else {
                    fromIndex = len + fromIndex
                }

                let res = -1;
                for (let i = fromIndex; i >= 0; i--) {
                    if (this[i] === searchElement) {
                        res = i
                        break
                    }
                }
                return res;
            } else {
                return this.__nativeFunc('lastIndexOf', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })


    Object.defineProperty(MyArray.prototype, 'reverse', {
        value: function() {
            if (!Array.prototype.reverse) {
                let len = this.length
                for (let i = 0; i < len - i; i++) {
                    swithh(this, i, len - i)
                }
                return this
            } else {
                this.__nativeFunc('reverse', [])
                return this
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    Object.defineProperty(MyArray.prototype, 'includes', {
        value: function(...args) {
            if (!Array.prototype.includes) {
                let target = args[0]
                let fromIndex = args[1]
                let len = this.length
                fromIndex = fromIndex >= 0 ? fromIndex : (len + fromIndex)
                for (let i = fromIndex; i < len; i++) {
                    if (this[i] === target) {
                        return true
                    }
                }
                return false;
            } else {
                return this.__nativeFunc('includes', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    /**
     * 对于keys的调用是没有参数的，但是沙箱内部会传入一个当前环境的Symbol构造类进来。
     * @param Smbl
     */
    Object.defineProperty(MyArray.prototype, 'keys', {
        value: function() {
            const Smbl = MyArray._Smbl
            let len = this.length
            let count = 0
            return new EIterator(Smbl, {
                next: () => {
                    if (count < len) {
                        return { done: false, value: count++ }
                    } else {
                        return { done: true, value: count }
                    }
                }
            })
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    /**
     * 对于entries的调用是没有参数的，但是沙箱内部会传入一个当前环境的Symbol构造类进来。
     * @param Smbl
     */
    Object.defineProperty(MyArray.prototype, 'entries', {
        value: function() {
            const Smbl = MyArray._Smbl
            let arr = this.map(_ => _)
            let len = this.length
            let count = 0
            return new EIterator(Smbl, {
                next: () => {
                    if (count < len) {
                        return { done: false, value: [count, arr[count++]] }
                    } else {
                        return { done: true, value: null }
                    }
                }
            })
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    Object.defineProperty(MyArray.prototype, 'values', {
        value: function() {
            const Smbl = MyArray._Smbl
            let arr = this.map(_ => _)
            let len = this.length
            let count = 0
            return new EIterator(Smbl, {
                next: () => {
                    if (count < len) {
                        return { done: false, value: arr[count++] }
                    } else {
                        return { done: true, value: null }
                    }
                }
            })
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    Object.defineProperty(MyArray.prototype, 'flat', {
        value: function(...args) {
            // @ts-ignore
            if (!Array.prototype.flat) {
                let depth = args[0]
                if (depth === undefined) {
                    depth = 1
                }
                if (+depth !== depth) {
                    throw new TypeError('first parameter of Array.prototype.flat must be number')
                }
                let tt = new MyArray
                let t = [...flatten(this, depth)]
                for(let i=0;i<t.length;i++){
                    tt[i] = t[i]
                }
                return tt;
            } else {
                return this.__nativeNewFunc('flat', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    Object.defineProperty(MyArray.prototype, 'flatMap', {
        value: function(...args) {
            // @ts-ignore
            if (!Array.prototype.flatMap) {
                let func = args[0]
                if (typeof func != 'function') {
                    throw new TypeError('first parameter of Array.prototype.flatMap must be function')
                }
                let tt = new MyArray
                let t = [...flatten(this.map(func), 1)]
                for(let i=0;i<t.length;i++){
                    tt[i] = t[i]
                }
                return tt;
            } else {
                return this.__nativeNewFunc('flatMap', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })

    Object.defineProperty(MyArray.prototype, 'reduceRight', {
        value: function(...args) {
            if (!Array.prototype.reduceRight) {
                let func = args[0]
                if (typeof func != 'function') {
                    throw new TypeError('first parameter of Array.prototype.reduceRight must be function')
                }
                let initialValue = args[1]
                let startIndex = this.length - 1
                if (initialValue === undefined) {
                    if (this.length == 0) {
                        throw new TypeError('calling reduceRight on an empty array without an initial value')
                    }
                    initialValue = this[this.length - 1]
                    startIndex--
                }
                for (let i = startIndex; i >= 0; i--) {
                    initialValue = func(initialValue, this[i], i, this)
                }
                return initialValue
            } else {
                return this.__nativeNewFunc('reduceRight', args)
            }
        },
        enumerable: false,
        configurable: true,
        writable: false,
    })


    // Object.defineProperty(MyArray.prototype, 'concat', {
    //     enumerable: false,
    //     value: function(...args) {
    //         return this.__nativeNewFunc('concat', args)
    //     }
    // })
    // protected pop(...args) {
    //     return this.__nativeFunc('pop', args)
    // }

    // protected push(...args) {
    //     return this.__nativeFunc('push', args)
    // }
    // protected slice(...args) {
    //     return this.__nativeNewFunc('slice', args)
    // }
    // protected shift() {
    //     return this.__nativeFunc('shift', [])
    // }

    // protected unshift() {
    //     return this.__nativeFunc('unshift', [])
    // }

    // protected sort(...args) {
    //     return this.__nativeFunc('sort', args)
    // }

    // protected splice(...args) {
    //     return this.__nativeFunc('splice', args)
    // }
    // protected indexOf(...args) {
    //     return this.__nativeFunc('indexOf', args)
    // }

    // protected join(...args) {
    //     return this.__nativeFunc('join', args)
    // }
    // protected forEach(...args) {
    //     return this.__nativeFunc('forEach', args)
    // }

    // protected filter(...args) {
    //     return this.__nativeFunc('filter', args)
    // }
    // protected map(...args) {
    //     return this.__nativeNewFunc('map', args)
    // }

    // protected every(...args) {
    //     return this.__nativeFunc('every', args)
    // }

    // protected some(...args) {
    //     return this.__nativeFunc('some', args)
    // }

    // protected reduce(...args) {
    //     return this.__nativeFunc('reduce', args)
    // }
    // protected toString() {
    //     return this.join(',')
    // }

    // protected toLocaleString() {
    //     return this.join(',')
    // }

    MyArray._setSmbl(Smbl)


    return MyArray

}

function swithh(arr, i, j) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

function* flatten(array, depth) {
    for (const item of array) {
        if (Array.isArray(item) && depth > 0) {
            yield* flatten(item, depth - 1);
        } else {
            yield item;
        }
    }
}


function formatStart(start, len){
    if(+start !== start){
        throw new TypeError('parameter must be number')
    }
    if(start == null) return 0
    else if(start < 0) return Math.max(0, len+start)
    else return Math.min(len, start)
}

function formatEnd(end, len){
    if(+end !== end){
        throw new TypeError('parameter must be number')
    }
    if(end == null) return len
    else if(end < 0) {
        return len+end<0?len:(len+end)
    }
    else return Math.min(len, end)
}

/**
 *  ["length", "constructor", "concat", "copyWithin", "fill", "find", "findIndex", "lastIndexOf", "pop", "push", "reverse", "shift", "unshift", "slice", "sort", "splice", "includes", "indexOf", "join", "keys", "entries", "values", "forEach", "filter", "flat", "flatMap", "map", "every", "some", "reduce", "reduceRight", "toLocaleString", "toString"]
 */