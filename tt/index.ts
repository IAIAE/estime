import {Interpreter} from '../src/interpreter/main'
import {EventEmitter} from 'events'
const fs = require('fs')
const path = require('path')

let evt = new EventEmitter()

let inter = new Interpreter({
    postMessage: (type, val)=>{ evt.emit(type, val) },
    console: console
}, {
    ecmaVersion: 2018,
    rootContext: {},
    globalContextInFunction: {}
})

evt.on('result', val=>{
    console.info('the result is ', val)
})
evt.on('data', val=>{
    console.info('on data ', val)
})


let res = inter.evaluate(`
class Sup {
    constructor(){
        this.mother = 'love'
    }
    me = 'Im your father'
    father(){
        console.info(this.me)
    }
}
class Test extends Sup {
    name = 123
    constructor(){

    }
    getName = () => {
        return this.name
    }
    getNameNoBind(){
        return this.name
    }
    static show(){
        console.info('test show')
    }
}
let t = new Test
console.info(t.name)
let tt = t.getName
console.info(tt())
console.info(t.getNameNoBind())
tt = t.getNameNoBind
console.info(tt())
t.father()
console.info(t.mother)
`)

console.info('res is ', res)