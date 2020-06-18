/**
 * rest测试
 */
import { Interpreter } from "../../src";

test("Symbol-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let t = Symbol()
rt(typeof t)
`);
	expect(res).toEqual('symbol');
});

test("Symbol-2", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let t = Symbol('t')
let tt = Symbol('t')
rt(t === tt)
`);
	expect(res).toEqual(false);
});

test("Symbol-3", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let t = Symbol('t')
let tt = Symbol('t')
rt(Symbol.for('t') === t)
`);
	expect(res).toEqual(true);
});


test("Symbol-4", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let t = Symbol('t')
let tt = Symbol('t')
rt(Symbol.for('t') === tt)
`);
	expect(res).toEqual(false);
});

test("Symbol-5", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let t = Symbol('t')
let tt = Symbol('t')
rt(Symbol.keyFor(t))
`);
	expect(res).toEqual('t');
});

test("Symbol-6", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let t = Symbol('t')
let tt = Symbol('t')
let a = {}
a[t] = 'hello'
rt(a[t])
`);
	expect(res).toEqual('hello');
});

test("Symbol-7", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let t = Symbol('t')
let tt = Symbol('t')
let a = {name: 123, age: 'hello'}
a[t] = 'test'
rt(Object.keys(a))
`);
	expect(res).toEqual(['name', 'age']);
});

test("Symbol-8", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
let t = Symbol('t')
let tt = Symbol('t')
let a = {name: 123, age: 'hello'}
a[t] = 'test'
let res = []
for(key in a){
    res.push(key)
}
rt(res)
`);
	expect(res).toEqual(['name', 'age']);
});

test("Symbol-9", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
rt(Symbol.iterator === Symbol.iterator)
`);
	expect(res).toEqual(true);
});

test("Symbol-10", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    try{
        let a = new Symbol('a')
        rt(2)
    }catch(e){
        if(/cannot new a Symbol/.test(e.message)){
            rt(0)
        }else{
            rt(1)
        }
    }
`);
	expect(res).toEqual(0);
});


