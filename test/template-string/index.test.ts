/**
 * rest测试
 */
import { Interpreter } from "../../src";
const fs = require('fs')
const path = require('path')

test("template-string-1", () => {
    let res;
    let code = fs.readFileSync(path.resolve(__dirname, './1.js'), 'utf-8')
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate(code);
	expect(res).toEqual('hello! world test. world');
});

test("template-string-2", () => {
    let res;
    let code = fs.readFileSync(path.resolve(__dirname, './2.js'), 'utf-8')
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate(code);
	expect(res).toEqual('Object(obj)');
});


test("template-string-3", () => {
    let res;
    let code = fs.readFileSync(path.resolve(__dirname, './3.js'), 'utf-8')
    let inter = new Interpreter({
        rt: (val)=>{res = val},
        console,
    })
    inter.evaluate(code);
	expect(res).toEqual('[object Object]');
});