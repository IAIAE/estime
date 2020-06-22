import {Interpreter} from '../src/interpreter/main'
import {EventEmitter} from 'events'
const fs = require('fs')
const path = require('path')

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
function m1(){
    var title = 'm1'

    throw 'error'
}
function m2(){
    var title = 'm2';
    m1();

}
function m3(){
    var title = 'm3';
    try {
        m2();
    } catch(e) {
      return  title
    }
}

m3()
`)

console.info('res is ', res)