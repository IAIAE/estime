import {Interpreter} from '../src/interpreter/main'
import {EventEmitter} from 'events'
import * as React from 'react'
const fs = require('fs')
const path = require('path')


let res;
let inter = new Interpreter({
    rt: (val)=>{res = val},
    console,
    React,
})

inter.evaluate( `
let arr = []
setTimeout(()=>{
    arr.push(4)
}, 10)
setTimeout(()=>{
    arr.push(2)
    queueMicrotask(()=>{
        arr.push(3)
    })
}, 0)
queueMicrotask(()=>{
    arr.push(1)
})
Promise.resolve(null).then(()=>{
    arr.push(1.1)
})

rt(arr)
`);

setTimeout(()=>{
    console.info('res ', res)
}, 100)