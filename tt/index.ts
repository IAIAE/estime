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

// inter.evaluate(`
// if(true){
//     let a = 'hello'
//     postMessage('data', '1=>'+a)
// }
// var test = a;
// let a = 1234;
// postMessage('data', '2=>'+a)
// // a = b;
// // let b = 'asdf'
// // postMessage('result', b)
// `)


// inter.evaluate(`
// var key = 123;
// for(let key in {name: '123', age: 123}){
//     postMessage('data', '=>'+key)
// }
// postMessage('data', 'outer=>'+key)
// `)


// inter.evaluate(`
// var i = 3453;
// for(let i =0;i<10;i++){
//     let key = 123;
//     postMessage('data', 'key='+ key+ ', i='+i);
// }
// postMessage('data', i)
// `)

let res = inter.evaluate(`
if(true){
    let a = 123;
    if(true){
        try{
            let a = b;
            let b = 123;
            var result = 456;
        }catch(e){
            // console.info('catch', e)
            result = 123;
        }
    }
}
console.info('the result is ', result)
result;
`)
console.info('res is ', res)