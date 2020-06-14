import {Interpreter} from '../src/interpreter/main'
import {EventEmitter} from 'events'


let evt = new EventEmitter()

let inter = new Interpreter({
    postMessage: (type, val)=>{ evt.emit(type, val) },
    console: console
}, {
    ecmaVersion: 2015
})

evt.on('result', val=>{
    console.info('the result is ', val)
})
evt.on('data', val=>{
    console.info('on data ', val)
})



// let res = inter.evaluate(`
// let a = key
// const key = (123);
// const key = (key, 123);
// key = 456;
// `)
// todo: for-in 设置const时，不要报错
let res = inter.evaluate(`
try{
    let res = 0;
    for(let i = 0; i<4;i++){
        const sum = i
        res += sum;
    }
}catch(e){
    console.info(e.message)
}
`)

console.info('res is ', res)