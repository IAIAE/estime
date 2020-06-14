import { Interpreter } from "../../src";

test("ConstDeclaration-1", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console: console,
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate( `
let res = 0
try{
    let a = key
    const key = 123;
}catch(e){
    // console.info('====>', e.message);
    if(/Cannot access/.test(e.message)){
        res = 123
    }
}
rt(res)
`);

	expect(res).toEqual(123);
});

test("ConstDeclaration-3", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate( `
let res = 0
try{
    const key = 123;
    key = 111
}catch(e){
    if(/because it is a constant/.test(e.message)){
        res = 123
    }
}
rt(res)
`);
	expect(res).toEqual(123);
});

test("ConstDeclaration-4", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate( `
let res = 0
try{
    for(const key in [1,2]){
        let key = 123
    }
    res = 2
}catch(e){
    res = 3
}
rt(res)
`);
	expect(res).toEqual(2);
});

test("ConstDeclaration-5", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate( `
let res = 0
try{
    for(const key in [1,2]){
        key = 123
    }
    res = 2
}catch(e){
    if(/because it is a constant/.test(e.message)){
        res = 3
    }
}
rt(res)
`);
	expect(res).toEqual(3);
});


test("ConstDeclaration-6", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate( `
try{
    let sum = 0
    for(const key in [1,2,3]){
        sum += +key
    }
    rt(sum)
}catch(e){
    rt(123)
}
`);
	expect(res).toEqual(0+1+2);
});

test("ConstDeclaration-7", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate( `
try{
    for(const i = 0; i<10;i++){
    }
    rt(0)
}catch(e){
    if(/because it is a constant/.test(e.message)){
        rt(1)
    }else{
        rt(2)
    }
}
`);
	expect(res).toEqual(1);
});



test("ConstDeclaration-8", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate( `
try{
    let res = 0;
    for(let i = 0; i<4;i++){
        const sum = i
        res += sum;
    }
    rt(res)
}catch(e){
    rt(1)
}
`);
	expect(res).toEqual(6);
});