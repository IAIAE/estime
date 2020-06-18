/**
 * computed-property测试
 */
import { Interpreter } from "../../src";

test("Computed-property-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    let t = Symbol('t')
    let name = Symbol('name')
    let a = {
        _t: 0,
        get [t](){
            return this._t;
        },
        set [t](val){
            this._t = val
        },
        [name]: 'hello world'
    }
    let _1 = a[t]
    a[t] = 123
    let _2 = a[t]
    let _3 = a[name]
    let _4 = Object.keys(a)
    rt({_1, _2, _3, _4})
`);
	expect(res).toEqual({_1: 0, _2: 123, _3: 'hello world', _4: ['_t']});
});

test("Computed-property-2", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    let key = 'hello'
    let a = {
        test: 'foo',
        [key]: 'world'
    }
    let _1 = Object.keys(a)
    let _2 = a[key]
    rt({_1, _2})
`);
	expect(res).toEqual({_1: ['test', 'hello'], _2: 'world'})
});



