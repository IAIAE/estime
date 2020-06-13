import { Interpreter } from "../../src";

test("LetDeclaration-1", () => {
    let inter = new Interpreter(null, {
        ecmaVersion: 2015
    })
	const a = inter.evaluate(
		`
let a = 123;
  `
	);

	expect(a).toEqual(undefined);
});

test("LetDeclaration-2", () => {
    let inter = new Interpreter(null, {
        ecmaVersion: 2015
    })
	const a = inter.evaluate(
		`
let a = 123;
a;
  `
	);

	expect(a).toEqual(123);
});

test("LetDeclaration-3", () => {
    let inter = new Interpreter(null, {
        ecmaVersion: 2015
    })
	const a = inter.evaluate(
		`
function _t1(){
  var a = 123;
  if(true){
    let a = 456;
  }
  return a;
}
_t1();
    `
	);
	expect(a).toEqual(123);
});

test("LetDeclaration-4", () => {
    let inter = new Interpreter(null, {
        ecmaVersion: 2015
    })
	const a = inter.evaluate(
		`
var key = 123;
let arr = []
for(let key in {name: '123', age: 123}){
    arr.push(key)
}
var a = {key:key, arr:arr};
a
`)

	expect(a).toEqual({key: 123, arr: ['name', 'age']});
});

test("LetDeclaration-5", () => {
    let inter = new Interpreter(null, {
        ecmaVersion: 2015
    })
	const a = inter.evaluate(
		`
var i = 0;
let sum = 0;
for(let i=0;i<3;i++){
    let key = i;
    sum += key
    key = 10;
}
let res = {i: i, sum: sum};
res
    `
	);
	expect(a).toEqual({i: 0, sum: 3});
});

test("LetDeclaration-6", () => {
    let inter = new Interpreter({
        // rt: (val)=>{res = val},
    }, {
        ecmaVersion: 2015,
    })
	let res = inter.evaluate(
        `
let a = (function(){
    if(true){
        if(true){
            try{
                let a = b;
                let b = 123;
                var result = 456;
            }catch(e){
                result = 123;
            }
        }
    }
    return result
})()
a
      `
	);

	expect(res).toEqual(123);
});



test("LetDeclaration-7", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate(
        `
(function(){
    let cache = new Array(100).join(',').split(',');
    for(let item=cache, i=0;i<cache.length;i++){
        item[i] = i
        let foo = i
        foo++
        var t = item[foo - 1]
    }
    rt(t)
})();
      `
	);

	expect(res).toEqual(99);
});


test("LetDeclaration-7", () => {
    let res;
    let inter = new Interpreter({
        rt: (val)=>{res = val},
    }, {
        ecmaVersion: 2015,
    })
	inter.evaluate(
        `
(function(){
    try{
        function test(){
            var a = b;
            let b = 'hello world';
        }
        test()
        rt(456)
    }catch(e){
        rt(123)
    }
})();
      `
	);

	expect(res).toEqual(123);
});

