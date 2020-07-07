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

```shell
npm i estime -S
```

## 使用

```javascript
import { Interpreter } from "estime";

const interpreter = new Interpreter({
  console,
  rt: (val) => (res = val)
});

try {
  let res;
  interpreter.evaluate(`
    class Test {
      name = 'default_test';
      setName = (name) => {
        this.name = name
      }
    }
    let t = new Test
    t.setName('hello')
    console.info(t.name)
    rt(t.name)
  `);
  console.info('the result is ', res)
} catch (e) {
	console.log(e);
}
```

## 参数

```ts
interface Options {
	// 根作用域，只读
	rootContext?: {} | null;
	globalContextInFunction?: any;
}
```

Example

```javascript
import { Interpreter } from "estime";

const ctx = {};
const interpreter = new Interpreter(ctx, {
  rootContext: window,
});

interpreter.evaluate(`
  a = 100;
  console.log(a); // 100
`);

window.a; //undefined

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
```javascript
import {Interpreter} from '../src/interpreter/main'

let inter = new Interpreter(null)

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
其中不支持JSXFragments、JSXNamespacedName和JSXSpreadChild。JSX标准参考[fb的jsx specification](https://facebook.github.io/jsx/)
acorn-jsx不支持JSXSpreadChild，且用的比较少。例如下面两种content的用法，效果是一样的，为什么要我要去用spread呢？暂且不支持吧。
jsx
```typescript
let content = [1,2,3]
let t = <div>
  {content}
  {...content}
</div>
```

### jsx使用例子：

```typescript
let code = `
let props = {
   style: { border: '1px solid #333', color: 'red', borderRadius: 3, padding: 10, margin: 10 }
}

class Panel extends React.Component{
   render(){
       return <div {...props}>this is other Component: Panel</div>
   }
}
class TT extends React.Component{
  render(){
    return <div {...props}>
      hello world
      <input disabled style={{display: 'block', width: 300,}} />
      <Panel />
    </div>
  }
}
__rt(TT)
`
class Test {
  getCpt(code){
    let interRes;
    let inter = new Interpreter({
      __rt: val => (interRes = val),
      console,
      React: React,
    })
    try{
      inter.evaluate(code)
    }catch(e){
      console.info(e)
      return e.message
    }
    return interRes
  }
  render(){
    let C = this.state.C
    return <div>
      <button onClick={_=>{
        let Cpt = this.getCpt(code)
        this.setState({
          C: Cpt
        })
      }}>点击生成组件</button>
      {C && <div><C/></div>}
    </div>
  }
}
```
效果如下：

<img src="https://raw.githubusercontent.com/IAIAE/estime/master/docs/img/jsx-demo.gif" width="400" />

## License
Mozilla Public License Version 2.0

## 相关

-  [evaljs](https://github.com/marten-de-vries/evaljs)
-  [closure-interpreter](https://github.com/int3/closure-interpreter)
-  [typescript:generator.ts](https://github.com/Microsoft/TypeScript/blob/master/src/compiler/transformers/generators.ts)


## generator相关实现方法
generator的实现是难点，但其功能又如此重要（异步方法的基石），不得不支持。目前正在纠结中，将generator的定义转换成es5可执行的同等函数，其工作量不亚于再写一个js解释器。有现成的npm包比如`regenerator`可以将generator的代码转换成es5的形式，但其包体大小压缩有都有足足1M，我是肯定不会用的。typescript的源码中带有转换generator的代码，两千多行，不同的是ts只是一个预编译期，我需要的是一个解释器，目前准备复刻并精简这部分代码，看最终能否达到理想效果。如果解析没问题的话，代码生成和ts的有所差异，ts生成的是switch结构的label标签作为定位代码段，这种hard code的方式肯定不符合我动态执行的要求，转而我需要的大概是一个模拟switch行为的路由确定执行代码段。

ts生成的es5代码大概是这样的：
```javascript
function f() {
  var /*locals*/;
  /*functions*/
  return __generator(function (state) {
    switch (state.label) {
      /*cases per label*/
    }
  });
}
```

而我们需要构造的runtime方法大概是这样的：
```javascript
function f(){
  var /*locals*/;
  /*functions*/
  let __block_label_map = {
    0: someBlockClosure,
    1: someBlockClosure,
    // ...
  }
  return __generator(function(state){
    let res;
    for(let i=shareObj.label; i<=10; i++){
        if(res = mapp[shareObj.label].call(this, shareObj)){
            return res
        }
    }
  })
}
```
这样我们就可以专注于生成每个代码段的closure，而复用一个统一形式的方法了。
另外需要注意的是someBlockClosure可以单独定义一个handler和type。它和函数类似采用初始化时作用域(能够访问同级的var变量，而不是访问调用时候的作用域)，而在执行的时候又不单独生成scope。因为我们可以确定someBlockClosure中是没有变量定义的，这样就减少了用函数closure时不必要的创建scope开销。

# todoList
es2015\es2017等等申明，个人感觉是非严格的es规范支持声明。es的规范会经过不同stage的提案状态，有些特性还在stage-1等就已经放出来开始广泛使用了。所以对于es2015，你会看到有“对象解构”，但是实际上在2015年的时候，它还不是stage-4。我看acorn.js在es2018才支持解构，但是babel的文档上，es2015就已经包含解构了，这样的差异还真不好细究清楚，且深究也没有意义。所以，我没有局限在2015还是2017上，关注的是特性，需要支持的特性下面的todolist都会列出来。

相关特性可以看[这里](https://babeljs.io/docs/en/learn/)，并不一定全部实现。但常用的都会实现的。

- [x] 块级作用域
  - [x] let
  - [x] const
- [x] Class
  - [x] 基础声明
  - [x] extends
  - [x] class fields
  - [x] static property
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
- [x] Map + Set + WeakMap + WeakSet 由外部提供支持，沙箱不做特殊支持
- [x] for-of
- [x] Template Strings
- [x] Computed property
- [x] Symbols
- [x] Array新增方法等
  - [x] Array.from
  - [x] Array.of
  - [x] Array.prototype.entries
  - [x] Array.prototype.values
  - [x] Array.prototype.keys
  - [x] Array.prototype.reverse
  - [x] Array.prototype.find
  - [x] Array.prototype.fill
  - [x] Array.prototype.lastIndexOf
  - [x] Array.prototype.findIndex
  - [x] Array.prototype.copyWithin
  - [x] Array.prototype.includes
  - [x] Array.prototype.flat
  - [x] Array.prototype.flatMap
  - [x] Array.prototype.reduceRight
- [ ] Promises
- [ ] Generators
- [ ] async/await
- [x] JSX支持，其中不支持JSXFragments、JSXNamespacedName和JSXSpreadChild。JSX标准参考[fb的jsx specification](https://facebook.github.io/jsx/)
  - [x] JSXElement
  - [x] JSXIdentifier for React IntrinsicElement
  - [x] SelfClosing
  - [x] JSXExpressionContainer
  - [x] JSXText