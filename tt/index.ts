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

`);
console.info('res ', res)