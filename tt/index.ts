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

`)

console.info('res is ', res)