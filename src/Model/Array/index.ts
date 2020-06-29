/**
 * 这个是对Array的封装
 * 为什么要这么做，请看issue：https://github.com/IAIAE/estime/issues/5
 */

// @ts-ignore
export default class MyArray {
    static isArray(val: any){
        return val instanceof MyArray
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
                    A.__setIndex(k, typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k));
                } else {
                    A.__setIndex(k, kValue);
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    }());
    static of(){
        return MyArray.prototype.slice.call(arguments)
    }

    private __arr: Array<any>;

    constructor(len?: number){
        this.__arr = new Array(len)
    }
    get length(){
        return this.__arr.length
    }
    set length(val){
        this.__arr.length = val
    }


    private __setIndex(ind:number, val:any){
        this.__arr[ind] = val
    }
    private __getIndex(ind:number){
        return this.__arr[ind]
    }

    public concat(...args){
        return this.__nativeNewFunc('concat', args)
    }

    /**
     * 调用原生方法，创建一个新的数组，封装起来
     * @param name
     * @param args
     */
    private __nativeNewFunc(name: string, args){
        let t = new MyArray
        t.__arr = this.__arr[name].apply(this.__arr, args.map(_=>{
            if(_ instanceof MyArray){
                return _.__arr
            }
            return _
        }))
        return t
    }
    /**
     * 调用原生方法，不创建一个新的数组
     * @param name
     * @param args
     */
    private __nativeFunc(name: string, args){
        return this.__arr[name].apply(this.__arr, args.map(_=>{
            if(_ instanceof MyArray){
                return _.__arr
            }
            return _
        }))
    }

    public slice(...args){
        return this.__nativeNewFunc('slice', args)
    }

    public copyWithin(...args){
        if(!Array.prototype.copyWithin){
            // todo:
        }else{
            return this.__nativeNewFunc('copyWithin', args)
        }
    }

    public fill(...args){
        if(!Array.prototype.fill){
            // todo:
        }else{
            return this.__nativeFunc('fill', args)
        }
    }

    /**
     * 找到第一个匹配的元素
     * @param args
     */
    public find(...args){
        if(!Array.prototype.find){
            let func = args[0]
            if(typeof func != 'function'){
                throw new TypeError(args[0] + ' is not a function')
            }
            let res;
            for(let i=0;i<this.__arr.length; i++){
                if(func(this.__arr[i], i, this)){
                    res = this.__arr[i]
                    break
                }
            }
            return res;
        }else{
            return this.__nativeFunc('find', args)
        }
    }

    /**
     * 找到第一个匹配元素的下标
     * @param args
     */
    public findIndex(...args){
        if(!Array.prototype.findIndex){
            let func = args[0]
            if(typeof func != 'function'){
                throw new TypeError(func + ' is not a function')
            }
            let res = -1;
            for(let i=0;i<this.__arr.length; i++){
                if(func(this.__arr[i], i, this)){
                    res = i
                    break
                }
            }
            return res;
        }else{
            return this.__nativeFunc('findIndex', args)
        }
    }

    /**
     * 从后往前遍历，找到最后一个匹配元素的下标
     * @param args
     */
    public lastIndexOf(...args){
        if(!Array.prototype.lastIndexOf){
            let searchElement = args[0]
            let fromIndex = args[2]
            if(+fromIndex !== fromIndex){
                throw new TypeError(fromIndex + ' is not a number')
            }
            let len = this.__arr.length
            if(fromIndex >= 0){
                fromIndex = Math.min(len-1, fromIndex)
            }else{
                fromIndex = len + fromIndex
            }

            let res = -1;
            for(let i=fromIndex;i>=0; i--){
                if(this.__arr[i] === searchElement){
                    res = i
                    break
                }
            }
            return res;
        }else{
            return this.__nativeFunc('lastIndexOf', args)
        }
    }

    public pop(...args){
        return this.__nativeFunc('pop', args)
    }

    public push(...args){
        return this.__nativeFunc('push', args)
    }

    public reverse(){
        if(!Array.prototype.reverse){
            let len = this.length
            for(let i=0;i<len - i; i++){
                swithh(this.__arr, i, len-i)
            }
            return this
        }else{
            this.__nativeFunc('reverse', [])
            return this
        }
    }







}


function swithh(arr, i, j){
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

/**
 *  ["length", "constructor", "concat", "copyWithin", "fill", "find", "findIndex", "lastIndexOf", "pop", "push", "reverse", "shift", "unshift", "slice", "sort", "splice", "includes", "indexOf", "join", "keys", "entries", "values", "forEach", "filter", "flat", "flatMap", "map", "every", "some", "reduce", "reduceRight", "toLocaleString", "toString"]
 */