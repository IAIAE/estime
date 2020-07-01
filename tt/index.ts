import {Interpreter} from '../src/interpreter/main'
import {EventEmitter} from 'events'
const fs = require('fs')
const path = require('path')

let evt = new EventEmitter()

let res;
let inter = new Interpreter({
    rt: (val)=>{res = val},
    console,
})


inter.evaluate( `
let t = [1,2,3].concat([4,5]).slice(1)
console.info(t)
for(let i of t.values()){
    console.info(i)
}
`);
console.info('res ', res)