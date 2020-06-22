# estime
estime = ecmascript + runtime, in javascipt(es5) environment

under developing....
功能开发中，如果要使用，请使用初版[eval5](https://github.com/bplok20010/eval5)

基于 TypeScript 编写的 JavaScript 解释器。初版fork于[eval5](https://github.com/bplok20010/eval5)，目标是原生支持es2017(非严格)语法和JSX且修改bug，持续开发中.....，进度请查看最后的[todoList](#todoList)

新开一个repo的原因是改得太多了。很难再去提mq

目前处于hot开发中....每天估计都会有更新，不稳定。请先不要使用

## 使用场景

-   浏览器环境中需要使用沙盒环境执行 JavaScript 脚本
-   控制执行时长
-   不支持`eval` `Function`的 JavaScript 运行环境：如 微信小程序
-   研究/学习用

## 支持 ECMAScript 版本

ES5\es2015(doing)\JSX(doing)

## 安装

todo:

## 使用

```javascript
import { Interpreter } from "estime";

const interpreter = new Interpreter(window, {
	timeout: 1000,
});

let result;

try {
	result = interpreter.evaluate("1+1");
	console.log(result);

	interpreter.evaluate("var a=100");
	interpreter.evaluate("var b=200");
	result = interpreter.evaluate("a+b");

	console.log(result);
} catch (e) {
	console.log(e);
}
```

## 参数

```ts
interface Options {
	// 默认为：0，不限制
	timeout?: number;
	// 根作用域，只读
	rootContext?: {} | null;
	globalContextInFunction?: any;
}
```

Example

```
import { Interpreter } from "estime";

const ctx = {};
const interpreter = new Interpreter(ctx, {
    rootContext: window,
	timeout: 1000,
});

interpreter.evaluate(`
    a = 100;
    console.log(a); // 100
`);

window.a;//undefined

```

## Interpreter

**`version`**

当前版本

**`global`**

默认值: `{}`

设置默认的全局作用域

```js
Interpreter.global = window;
const interpreter = new Interpreter();
interpreter.evaluate('alert("hello estime")');
```

**`globalContextInFunction`**

默认值: `undefined`

`estime` 不支持 `use strict` 严格模式, 在非严格下的函数中`this`默认指向的是全局作用域，但在`estime`中是`undefined`， 你可以通过`globalContextInFunction`来设置默认指向。

```js
import { Interpreter } from "Interpreter";

const ctx = {};
const interpreter = new Interpreter(ctx);
interpreter.evaluate(`
this; // ctx
function func(){
    return this; // undefined
}
func();
`);
```

```js
import { Interpreter } from "Interpreter";

Interpreter.globalContextInFunction = window;
const ctx = {};
const interpreter = new Interpreter({});
interpreter.evaluate(`
this; // ctx
function func(){
    return this; // window
}
func();
`);
```

再看以下代码：

> **注意: `Illegal invocation` 错误**
>
> 这就是`globalContextInFunction`默认设为`undefined`的原因

```
import { Interpreter } from "Interpreter";

Interpreter.globalContextInFunction = {};

const ctx = {alert: alert};

const interpreter = new Interpreter(ctx);

interpreter.evaluate(`
// alert.call({}, 'Hello estime')
// Illegal invocation
alert('Hello estime');
`);
```

**`constructor(context?: {}: options: Options = Interpreter.global)`**

构造函数

## Interpreter 的实例方法

**`evaluate(code: string): any`**

执行给定的字符串代码，并返回最后一个表达式的值

```js
import { Interpreter } from "Interpreter";

const interpreter = new Interpreter(window);

const result = interpreter.evaluate(`
var a = 100;
var b = 200;

a+b;

`);

console.log(result); // 300
```

**`appendCode(code: string): any`**

`evaluate`的别名

**`getExecutionTime(): number`**

获取上一次调用`evaluate`的执行时长

**`setExecTimeout(timeout: number = 0): void`**

设置执行时长

**`getOptions(): Readonly<Options>`**

获取解释器参数

---

## evaluate(code: string, ctx?: {}, options?: Options)

执行给定的字符串代码，并返回最后一个表达式的值

> 注: 该函数每次执行都会创建一个新的解释器

```js
import { evaluate } from " estime";

evaluate(
	`
var a = 100;
var b = 100;
console.log(a+b);
`,
	{ console: console }
); // 200

evaluate(`
    a;
`); // a is not defined
```

## Function

该函数会将`Interpreter.global` `Interpreter.globalContextInFunction`当作默认值并创建新的解释器

```js
import { Function } from "estime";

const func = new Function("a", "b", "return a+b;");
console.log(func(100, 200)); // 300
```

## ES2015 支持
记得一定要加上ecmaVersion，因为编译器默认指定es5，不特殊指定es6的话编译阶段就会报错
```javascript
import {Interpreter} from '../src/interpreter/main'

let inter = new Interpreter(null, {
    ecmaVersion: 2015
})

let res = inter.evaluate(`
let a = (function(){
    if(true){
        if(true){
            try{
                let a = b;
                let b = 123;
                var result = 456;
            }catch(e){
				// e is Cannot access 'b' before initialization
                result = 123;
            }
        }
    }
    return result
})()
a
`);
console.info(res)  // 123
```

## JSX支持
todo:

## vm

查看 [vm](https://nodejs.org/dist/latest-v13.x/docs/api/vm.html)

-   vm.createContext
-   vm.compileFunction
-   vm.runInContext
-   vm.runInNewContext
-   vm.Script

## License

MIT

## 相关

-   [evaljs](https://github.com/marten-de-vries/evaljs)
-   [closure-interpreter](https://github.com/int3/closure-interpreter)


# todoList
es2015\es2017等等申明，个人感觉是非严格的es规范支持声明。es的规范会经过不同stage的提案状态，有些特性还在stage-1等就已经放出来开始广泛使用了。所以对于es2015，你会看到有“对象解构”，但是实际上在2015年的时候，它还不是stage-4。我看acorn.js在es2018才支持解构，但是babel的文档上，es2015就已经包含解构了，这样的差异还真不好细究清楚，且深究也没有意义。所以，我没有局限在2015还是2017上，关注的是特性，需要支持的特性下面的todolist都会列出来。

相关特性可以看[这里](https://babeljs.io/docs/en/learn/)，并不一定全部实现。但常用的都会实现的。

- [x] 块级作用域
  - [x] let
  - [x] const
- [ ] Class
  - [ ] 基础声明
  - [ ] extends
  - [ ] class fields
  - [ ] static property
- [x] 箭头函数
  - [x] 基础执行支持
  - [x] context绑定
- [x] 解构
  - [x] 对象解构
  - [x] 数组解构
  - [x] 函数实参解构
- [x] Rest element
  - [x] ObjectPattern
  - [x] ArrayPattern
  - [x] 函数形参rest
- [ ] Map + Set + WeakMap + WeakSet
  - [ ] Map
  - [ ] Set
  - [ ] WeakMap
  - [ ] WeakSet
- [x] for-of
- [x] Template Strings
- [x] Computed property
- [x] Symbols
- [ ] Promises
- [ ] Generators
- [ ] Math + Number + String + Object APIs
  - [ ] Math 类的非原生支持的话，开销太大，不支持。
  - [ ] String.includes
  - [ ] String.repeat
  - [ ] Number.EPSILON
  - [ ] Number.isInteger
  - [ ] Number.isNaN
  - [ ] Array::from
  - [ ] Array::of
  - [ ] Array.fill
  - [ ] Array.findIndex
  - [ ] Array.entries
  - [ ] Array.keys
  - [ ] Array.values
  - [ ] Object.assign
- [ ] Binary and Octal Literals 二进制和八进制字面量
- [ ] Unicode，看情况实现
- [ ] Reflect API，看情况实现
- [ ] Module\export\import 不实现
- [ ] Proxies 代理，不实现，日常开发中也不推荐使用
- [ ] Tail Calls，尾递归优化，算是优化，非特性。先不做处理
- [ ] JSX支持