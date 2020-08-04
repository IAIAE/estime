# estime
estime = ecmascript + runtime, in javascipt(es5) environment

基于 TypeScript 编写的 JavaScript 解释器，运行于es的环境，且原生支持es6\jsx等众多常用的新特性。独立、安全。

初版fork于[eval5](https://github.com/bplok20010/eval5)，目标是原生支持es2017(非严格)语法和JSX且修改bug，持续开发中，进度请查看最后的[todoList](#todoList)

## 使用场景

-   不支持`eval` `Function`的 JavaScript 运行环境：如 微信小程序。
-   支持`eval`的Javascript环境，但是又担心eval的安全性问题。
-   需要代码动态更新的场景。例如你的React应用需要热更新组件；你的规则系统需要动态下发规则脚本等等。
-   研究/学习用

## [功能演示](https://iaiae.github.io/estime/)


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

## Interpreter静态属性

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
Interpreter.globalContextInFunction = window;
const interpreter = new Interpreter();
interpreter.evaluate('alert("hello estime")');
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

使用estime完成React组件动态更新的例子，非常灵活
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


## 异步队列方案

要在沙箱内部支持异步方法，就必须用js去模拟整个task的执行流程，task分为micro task和macro task。即我们说的大队和小队。Promise入的是小队，setTimeout入的是大队。这里是难点，这一套机制是整个异步流程的基石。

那么，怎么实现大小队呢？参考现有的promise pollyfill库，`promise.js`用的是`asap`，`asap`底层是process.nextTick降级到queueMicrotask再降级到MutationObserver最后降级到setTimeout。那么对于一个沙箱环境，我们是否有必要做得这么复杂呢？

首先明确一点，在浏览器环境，用户可以任意编写方法调用`setTimeout`或是`queueMicrotask`或是`Promise.resolve`等等，浏览器一般并没有限制。所以，当在浏览器实现一个小队的polyfill时候，就需要判断各种各样的api接口是否可用，然后处理各种降级，为的就是当用户调用你的`fakeMicroTask`放入的函数必定比他自己调用`setTimeout`放入的函数后执行。

那么，如果是沙箱环境，任何函数的实际执行都是沙箱决定的，沙箱完全可以只提供一个虚拟的“队列”，无论是`setTimeout`还是`queueMicrotask`还是`Promise.resolve`都放入同一个虚拟队列中，只是他们优先级不一样而已。那么，只要我们沙箱外部环境拥有`setTimeout`的能力(这几乎是100%兼容的)，我们就能够提供这样的虚拟队列，保证沙箱环境的各种不同优先级的异步方法执行；且这样做还有个好处，就是沙箱中的异步方法，永远都是优先级最低的`setTimeout`，不和外部环境抢小队的时间片。

实现虚拟的大小队的标准可以参照[event-loop-processing-model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)。


## generator相关实现方法
generator的实现也是难点，但其功能又如此重要（异步方法语法糖的基础），不得不支持。目前正在纠结中，将generator的定义转换成es5可执行的同等函数，其工作量不亚于再写一个js解释器。有现成的npm包比如`regenerator`可以将generator的代码转换成es5的形式，但其包体大小压缩有都有足足1M，我是肯定不会用的。typescript的源码中带有转换generator的代码，两千多行，不同的是ts只是一个预编译期，我需要的是一个解释器，目前准备复刻并精简这部分代码，看最终能否达到理想效果。如果解析没问题的话，代码生成和ts的有所差异，ts生成的是switch结构的label标签作为定位代码段，这种hard code的方式肯定不符合我动态执行的要求，转而我需要的大概是一个模拟switch行为的路由确定执行代码段。

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
- [ ] 异步函数
  - [x] 虚拟大小队列core
  - [ ] 虚拟大小队列的自动销毁
  - [x] setTimeout
  - [ ] setInterval 不支持，容易造成timer泄露，我鼓励自己用setTimeout来实现interval功能
  - [ ] Promise
  - [x] queueMicrotask
- [ ] Generators
- [ ] async/await
  - [X] Async generator functions 不支持
- [x] JSX支持，其中不支持JSXFragments、JSXNamespacedName和JSXSpreadChild。JSX标准参考[fb的jsx specification](https://facebook.github.io/jsx/)
  - [x] JSXElement
  - [x] JSXIdentifier for React IntrinsicElement
  - [x] SelfClosing
  - [x] JSXExpressionContainer
  - [x] JSXText
- [ ] 抽离acorn.js的依赖。为网络传输提供可靠安全的基础。
  - [ ] AST的压缩（可能是二进制）表示形式
  - [ ] 源码打包器
  - [ ] 压缩AST解释器runtime