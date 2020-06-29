import {isSymbol, storeKey, } from '../Symbols'


type IterReturn = {
    value: any
    done: boolean
}
/**
 * 这个类是用来在es5环境下模拟Iterator行为使用。
 * 在es5下，可迭代的对象无外乎两种，Array和Object。
 * 所以这个类是将数组形式的数据封装成Iterator，再用Iterator拓展出Map\Set等等数据结构
 * 底层的数据存储还是简单的数据[1,2,3]形式
 */
export class EIterator {
    option: {next: ()=>IterReturn}
    constructor(Smbl, option:{next:()=>IterReturn}){
        this[Smbl.iterator] = ()=>this
        this.option = option
    }
    next(){
        return this.option.next()
    }
}