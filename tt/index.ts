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
let arr = [1,2,3]
let t = arr.reduce((seed, cur)=>seed+cur, 0)
console.info('t ', t)
`)

console.info('res is ', res)