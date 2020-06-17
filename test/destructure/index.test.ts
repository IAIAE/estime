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


test("Destructure-6", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    let t = [1,2,3]
    rt([...t])
`);
	expect(res).toEqual([1,2,3])
});
test("Destructure-7", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    let t = [1,2,3]
    rt([1,,...t])
`);
	expect(res).toEqual([1,undefined,1,2,3])
});
test("Destructure-8", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
try{
    let t = [1,2, ...123];
    rt(2)
}catch(e){
    if(/not an array type/.test(e.message)){
        rt(0)
    }else{
        rt(1)
    }
}
`);
	expect(res).toEqual(0)
});
test("Destructure-9", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
try{
    let obj = {name: 123}
    let t = [1,2, ...obj];
    rt(2)
}catch(e){
    if(/not an array type/.test(e.message)){
        rt(0)
    }else{
        rt(1)
    }
}
`);
	expect(res).toEqual(0)
});