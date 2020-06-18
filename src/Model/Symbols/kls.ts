export function createSymbolFunc(){
    let cache = {}
    let count = {}
    function ESymbol(val: string) {
        if(this instanceof ESymbol){
            throw new TypeError('cannot new a Symbol')
        }
        !count[val] && (count[val] = 0)
        count[val] +=1
        return cache[val]?new SymbolClass(val, {count}):(cache[val] = new SymbolClass(val, {count}))
    }
    ESymbol.iterator = ESymbol('@@iterator')
    ESymbol.match = ESymbol('@@match')
    ESymbol.replace = ESymbol('@@replace')
    ESymbol.search = ESymbol('@@search')
    ESymbol.split = ESymbol('@@split')

    ESymbol.for = (val: string)=>{
        return cache[val] || ESymbol(val)
    }
    ESymbol.keyFor = (t: SymbolClass) => {
        if(t instanceof SymbolClass){
            return t.val
        }else{
            throw new TypeError('keyFor not a symbol')
        }
    }
    return ESymbol
}

export function isSymbol(t){
    return typeof t == 'symbol' || t instanceof SymbolClass
}


export const memberKeyPrefix = '__smbl_'
export function storeKey(t: SymbolClass){
    return `${memberKeyPrefix}${t.offset}_${t.val}`
}
class SymbolClass {
    val: string
    offset: number
    constructor(val: string, env){
        let count = env.count
        this.val = val;
        // 附加一个偏移量，用于区别val一样的情形
        this.offset = count[val]
    }
}
// console.info好像不太管用
SymbolClass.prototype.toString = SymbolClass.prototype.valueOf = function(){
    return `Symbol(${this.val})`
}