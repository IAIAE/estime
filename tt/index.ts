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
    const [first, ...rest] = 1;
    console.info('name is ', first, rest)
}
try{
    t.call({name: 123})
}catch(e){
    console.info(e)
}
`)

console.info('res is ', res)