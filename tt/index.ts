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
let obj = {
    [Symbol.iterator](){
        let t = 0
        return {
            next(){
                if(t>3){
                    return {done: true, value: 10}
                }else{
                    t++;
                    return {done: false, value: t}
                }
            }
        }
    }
}
for(const val of obj){
    console.info(val)
}
`)

console.info('res is ', res)