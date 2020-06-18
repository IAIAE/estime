/**
 * rest测试
 */
import { Interpreter } from "../../src";

test("Destructure-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let {name} = {name: 123}
rt(name)
`);
	expect(res).toEqual(123);
});

test("Destructure-2", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let {name} = Object.create({name: 123})
rt(name)
`);
	expect(res).toEqual(123);
});

test("Destructure-3", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let {name, ...rest} = Object.create({name: 123})
rt(rest)
`);
	expect(res).toEqual({});
});

test("Destructure-4", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let {name, ...rest} = {name: 123, age: 1, get show(){return 'show'}}
rt(rest)
`);
	expect(res).toEqual({age: 1, show: 'show'});
});


test("Destructure-5", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let {toFixed, ...rest} = 123;
rt(toFixed)
`);
	expect(res).toEqual(Number.prototype.toFixed)
});

test("Destructure-6", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let {toFixed, ...rest} = 123;
rt(rest)
`);
	expect(res).toEqual({})
});

test("Destructure-7", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
try{
    const {toFixed, ...rest} = 123;
    rest = 123;
    rt(1)
}catch(e){
    if(/because it is a constant/.test(e.message)){
        rt(0)
    }else{
        rt(2)
    }
}
`);
	expect(res).toEqual(0)
});

test("Destructure-8", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
try{
    const [first, ...rest] = 123;
    rt(1)
}catch(e){
    if(/\.slice is not a function/.test(e.message)){
        rt(0)
    }else{
        rt(2)
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
const arr = [1,2,3,4]
const [first, ...rest] = arr
rt(first)
`);
	expect(res).toEqual(1)
});

test("Destructure-10", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
const arr = [1,2,3,4]
const [first, ...rest] = arr
rt(rest)
`);
	expect(res).toEqual([2,3,4])
});

test("Destructure-11", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    function sum(first, ...rest){
        return first + rest.reduce((seed, cu)=>seed+cu, 0)
    }

    rt(sum(1,2,3,4))
`);
	expect(res).toEqual(1+2+3+4)
});


test("Destructure-12", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    function sum(...rest){
        return rest.reduce((seed, cu)=>seed+cu, 0)
    }

    rt(sum())
`);
	expect(res).toEqual(0)
});

test("Destructure-13", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    function sum(...rest){
        let t = rest.reduce((seed, cu)=>seed+cu, 0)
        return t
    }
    let t = sum(1,2,3)
    rt(t)
`);
	expect(res).toEqual(1+2+3)
});
test("Destructure-14", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    const sum = (...rest) => rest.reduce((seed, cu)=>seed+cu, 0)
    rt(sum(1,2,3))
`);
	expect(res).toEqual(1+2+3)
});