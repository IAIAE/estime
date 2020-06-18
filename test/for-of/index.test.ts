import { Interpreter } from "../../src";

test("for-of-test-0", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console: console,
    }, {
        ecmaVersion: 2015,
    })
    inter.evaluate( `
    let obj = {
        [Symbol.iterator](){
            let t = 0
            return {
                next(){
                    if(t>3){
                        return {done: true, value: 10}
                    }else{
                        t++;
                        return {done: false, value: t}
                    }
                }
            }
        }
    }
    let t = []
    for(const val of obj){
        t.push(val)
    }
    rt(t)
`);
    expect(res).toEqual([1,2,3,4]);
});

test("for-of-test-0", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console: console,
    }, {
        ecmaVersion: 2015,
    })
    inter.evaluate( `
    let t = []
    for(const val of [1,2,3,4]){
        t.push(val)
    }
    rt(t)
`);
    expect(res).toEqual([1,2,3,4]);
});


test("for-of-test-0", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console: console,
    }, {
        ecmaVersion: 2015,
    })
    inter.evaluate( `
    try{
        let obj = {}
        for(const val of obj){}
        rt(2)
    }catch(e){
        if(/not iterable/.test(e.message)){
            rt(0)
        }else{
            rt(1)
        }
    }
`);
    expect(res).toEqual(0)
});


