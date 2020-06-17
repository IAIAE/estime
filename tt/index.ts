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
function t(){
    let arr = [1,2,3,4]
    let t = [,,123, ...1, ,,456]
    console.info('t is ', t)
}
try{
    t.call({name: 123})
}catch(e){
    console.info(e)
}
`)

console.info('res is ', res)