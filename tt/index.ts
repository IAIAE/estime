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
    let T = val;
    let t = new T;
    let iter = t.getIter()
    for(let val of iter){
        console.info('val ', val)
    }
})
evt.on('data', val=>{
    console.info('on data ', val)
})


let res = inter.evaluate(`
let t = [1, 2, 3];
for(let item of t.entries()){
    console.info(item)
}
`)
