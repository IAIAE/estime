import {Interpreter} from '../src/interpreter/main'
import {EventEmitter} from 'events'


let evt = new EventEmitter()

let inter = new Interpreter({
    postMessage: (type, val)=>{ evt.emit(type, val) },
    console: console
}, {
    ecmaVersion: 2018
})

evt.on('result', val=>{
    console.info('the result is ', val)
})
evt.on('data', val=>{
    console.info('on data ', val)
})



let res = inter.evaluate(`
let t = Symbol('t')
let a = {name: 'hello'}
a[t] = 123
Object.keys(a).forEach(key=>{
    console.info(key)
})
a[t] = 456
console.info(a[t])
`)

console.info('res is ', res)