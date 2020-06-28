/**
 * 这个函数的说明文档：
 * 真的是超复杂啊~
 * https://github.com/Microsoft/tslib/blob/6be26c8c0772d9931c7c4a0b981160e164782e53/docs/generator.md
 * @param thisArg
 * @param body
 */
let __generator = function (thisArg, body) {
    let runing;
    /**
     * The y variable stores the iterator passed to a yieldstar instruction to which operations should be delegated.
     */
    let y
    /**
     * The t variable is a temporary variable that stores one of the following values:
     * • The completion value when resuming from a yield or yield*.
     * • The error value for a catch block.
     * • The current Protected Region.
     * • The verb (next, throw, or return method) to delegate to the expression of a yield*.
     * • The result of evaluating the verb delegated to the expression of a yield*.
     */
    let t
    /**
     * The __generator helper must share state between
     * its internal step orchestration function
     * and the body function passed to the helper.
     */
    let shareState: any = {
        /**
         * 下一个执行的switch case
         */
        label: 0,
        /**
         *
         */
        sent: function () {
            if (t[0] & 1) {
                throw t[1];
            }
            return t[1];
        },
        /**
         * A stack of Protected Regions,
         * which are 4-tuples that describe the labels that make up a try..catch..finally block.
         */
        trys: [],
        /**
         * A stack of pending operations used for try..finally blocks.
         */
        ops: []
    }
    /**
     * generator对象，柯里化方法最终调用step
     */
    let generatorObj = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2),
        [Symbol.iterator]: function () { return this; }
    }
    function verb(n) {
        return function (v?) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (runing) throw new TypeError("Generator is already executing.");
        while (shareState) {
            try {
                runing = true
                if (y
                    && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next)
                    && !(t = t.call(y, op[1])).done
                ) {
                    return t;
                }
                y = 0
                if (t) {
                    op = [op[0] & 2, t.value];
                }
                switch (op[0]) {
                    case 0: // next
                    case 1: // throw
                        t = op;
                        break;
                    case 4: // yield
                        shareState.label++;
                        return { value: op[1], done: false };
                    case 5: // yield*
                        shareState.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7: // endfinally
                        op = shareState.ops.pop();
                        shareState.trys.pop();
                        continue;
                    default:
                        t = shareState.trys
                        if (!(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            shareState = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            shareState.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && shareState.label < t[1]) {
                            shareState.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && shareState.label < t[2]) {
                            shareState.label = t[2];
                            shareState.ops.push(op);
                            break;
                        }
                        if (t[2]){
                            shareState.ops.pop();
                        }
                        shareState.trys.pop();
                        continue;
                }
                op = body.call(thisArg, shareState);
            } catch (e) {
                op = [6, e]; y = 0;
            } finally {
                runing = t = 0;
            }
        }
        if (op[0] & 5) {
            throw op[1];
        }
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return generatorObj
};

export default __generator