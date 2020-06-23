/**
 * computed-property测试
 */
import { Interpreter } from "../../src";

test("class-basic-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    class Test {
        constructor(name){
            this.name = name
        }
    }
    let t = new Test('hello')
    rt(t.name)
`);
	expect(res).toEqual('hello')
});

test("class-basic-2", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    class Test {
        constructor(name){
            this.name = name
        }
        getName(){
            return this.name
        }
        setName(val){
            this.name = val
        }
    }
    let t = new Test('hello')
    t.setName('world')
    rt(t.getName())
`);
	expect(res).toEqual('world')
});

test("class-field-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    let setName = 'setName'
    class Test {
        name = 123;
        [setName] = (val) => {
            this.name = val
        }
        getName = (val) => {
            return this.name
        }
    }
    let t = new Test
    t.setName('world')
    rt(t.getName())
`);
	expect(res).toEqual('world')
});

test("class-static-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    let setName = 'setName'
    class Test {
        static _name = 123;
        static [setName](val){
            this._name = val
        }
        static getName(val){
            return this._name
        }
    }
    Test.setName('world')
    rt(Test.getName())
`);
	expect(res).toEqual('world')
});


test("class-extends-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    try{
        class Test extends Sup {
        }
        class Sup { }
        rt(2)
    }catch(e){
        if(/before initialization/.test(e.message)){
            rt(0)
        }else{
            rt(1)
        }
    }
`);
	expect(res).toEqual(0)
});

test("class-extends-2", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate( `
    class Sup {
        setName(val){
            this.name = val
        }
        getName = () => {
            return this.name
        }
    }
    class Test extends Sup {
        name = 123;
    }
    let t = new Test
    t.setName('hello')
    rt(t.getName())
`);
	expect(res).toEqual('hello')
});