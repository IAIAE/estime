/**
 * 解构测试
 */

import { Interpreter } from "../../src";


test("Destructure-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
	inter.evaluate( `
    let test = {
        name: 'hello',
        _age: 0,
        set age(val){
            this._age = val
        },
        get age(){
            return this._age
        },
    }
    let other = {show: function(e){console.info('show')}}
    rt({...test, name: 'name'})
    console.info({name: 'name', ...test})
    console.info({name: 'name', ...test, ...other})
`);
	expect(res).toEqual({name: 'name', _age: 0, age: 0});
});

test("Destructure-2", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
	inter.evaluate( `
    let test = {
        name: 'hello',
        _age: 0,
        set age(val){
            this._age = val
        },
        get age(){
            return this._age
        },
    }
    let other = {show: function(e){console.info('show')}}
    rt({name: 'name', ...test})
    console.info({name: 'name', ...test, ...other})
`);
	expect(res).toEqual({name: 'hello', _age: 0, age: 0});
});

test("Destructure-3", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
	inter.evaluate( `
    let test = {
        name: 'hello',
        _age: 0,
        set age(val){
            this._age = val
        },
        get age(){
            return this._age
        },
    }
    let other = {show: 456}
    rt({name: 'name', ...test, ...other})
`);
	expect(res).toEqual({name: 'hello', _age: 0, age: 0, show: 456});
});

test("Destructure-4", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
	inter.evaluate( `
    let test = {
        name: 'hello',
        _age: 0,
        set age(val){
            this._age = val
        },
        get age(){
            return this._age
        },
    }
    const other = {show: 456}
    rt({name: 'name', ...test, ...other})
`);
	expect(res).toEqual({name: 'hello', _age: 0, age: 0, show: 456});
});


test("Destructure-5", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
	inter.evaluate( `
    let test = Object.create({
        name: 'hello',
        _age: 0,
        set age(val){
            this._age = val
        },
        get age(){
            return this._age
        },
    })
    const other = {show: 456}
    rt({name: 'name', ...test, ...other})
`);
	expect(res).toEqual({name: 'name', show: 456});
});