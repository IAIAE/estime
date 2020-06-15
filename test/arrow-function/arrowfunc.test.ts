import { Interpreter } from "../../src";

test("arrowfunc-test-1", () => {
    let res;
    let rtFunc = val => {res = val}
    let inter = new Interpreter({
        rt: rtFunc,
        console,
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate( `
let test = ()=>{
    rt(this)
}
test()
`);
    expect(res.rt).toEqual(rtFunc);
});


test("arrowfunc-test-2", () => {
    let res;
    let rtFunc = val => {res = val}
    let inter = new Interpreter({
        rt: rtFunc,
        console,
    }, {
        ecmaVersion: 2015,
    })
    inter.evaluate( `
function foo(){
    let test = ()=>{
        rt(this)
    }
    test()
}
foo()
`);
    expect(res).toEqual(undefined);
});

test("arrowfunc-test-2-1", () => {
    let res;
    let rtFunc = val => {res = val}
    let inter = new Interpreter({
        rt: rtFunc,
        console,
    }, {
        ecmaVersion: 2015,
        globalContextInFunction: {
            test: 123
        }
    })
    inter.evaluate( `
function foo(){
    let test = ()=>{
        rt(this)
    }
    test()
}
foo()
`);
    expect(res.test).toEqual(123);
});

test("arrowfunc-test-3", () => {
    let res;
    let rtFunc = val => {res = val}
    let inter = new Interpreter({
        rt: rtFunc,
        console,
    }, {
        ecmaVersion: 2015,
    })
    inter.evaluate( `
function foo(){
    let test = ()=>{
        rt(this)
    }
    test()
}
foo.call(123)
`);
    expect(res).toEqual(123);
});


test("arrowfunc-test-4", () => {
    let res;
    let rtFunc = val => {res = val}
    let inter = new Interpreter({
        rt: rtFunc,
        console,
    }, {
        ecmaVersion: 2015,
    })
    inter.evaluate( `
function foo(){
    let test = ()=>{
        rt(this)
    }
    test.bind('hello world')()
}
foo.call(123)
`);
    expect(res).toEqual(123);
});