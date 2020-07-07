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
let t = {
    style: {width: 100}
}
let style = {
    some: 'hadsfa'
}
let content = [1,2,3]
let App = () => 'app'
let ele = <div style={t.style}>
    "hello"
    {content}
    <div show {...t} className={style.some}>world</div>
    <App />
</div>
rt(ele)
`);
console.info('res ', res)