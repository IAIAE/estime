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
const arr = ['hello', 'world', 'estime']
const FOO = Symbol('foo')
class T {
    constructor(){
        console.info('cons in T')
    }
}
class Test extends T{
    constructor(){
        super()
        console.info('cons in Test')
    }
    name = 'default_test';
    setName = (name) => {
        this.name = name
    }
    [FOO] = 'bar'
    show(){
        for(let i of arr.entries()){
            console.info(i)
        }
    }
}
let t = new Test
console.info('t.foo is ==> ', t[FOO])   // bar
`);
console.info('res ', res)