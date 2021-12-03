# one

## 基础概念

- 类型 七种基础类型 一种引用类型
  - Undefined；Null；Boolean；String；Number；Symbol；BigInt；
  - Object；

## 问题

- 为什么有的编程规范要求用 void 0 代替 undefined？
  - undefined 和 null 的区别
    - Undefined 类型表示未定义；null，它的语义表示空值，与 undefined 不同，null 是 JavaScript 关键字；Null 表示的是：“定义了但是为空
  - 因为 JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，我建议使用 void 0 来获取 undefined 值
- 字符串有最大长度吗？
  - String 有最大长度是 2^53 - 1
- 0.1 + 0.2 不是等于 0.3 么？
  - 因为 js 是采用双精度标准，浮点数的运算时，会有精度损失
  - 正确的做法是 两者加起来 - 和 的绝对值小于等于 js 的最小精度值
- ES6 新加入的 Symbol 是个什么东西？
  - Symbol 是 ES6 中引入的新类型，它是一切非字符串的对象 key 的集合
  - Symbol 可以具有字符串类型的描述，但是即使描述相同，Symbol 也不相等。
  - 在 JavaScript 中，对象的定义是“属性的集合”。属性分为数据属性和访问器属性
- 为什么给对象添加的方法能用在基本类型上？
  - 因为 . 运算符可以进行装箱操作

- 为什么 JavaScript（直到 ES6）有对象的概念，但是却没有像其他的语言那样，有类的概念呢；
  - js 的面向对象是基于原型
- 为什么在 JavaScript 对象里可以自由添加属性，而其他的语言却不能呢？
  - js 的动态性

- 原型
  - javascript 的面向对象是基于原型系统
  - 原型系统是 照猫画虎 而 class 类 是将同类型的 抽象为一个类
  - JS 有高度的动态性 支持动态的修改对象的属性或方法
  - JS 复制对象时 __proto__ 属性会指向其 原型 prototype

```js
var cat = {
    say(){
        console.log("meow~");
    },
    jump(){
        console.log("jump");
    }
}

var tiger = Object.create(cat,  {
    say:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:function(){
            console.log("roar!");
        }
    }
})

var anotherCat = Object.create(cat);
anotherCat.say();
var anotherTiger = Object.create(tiger);
anotherTiger.say();
```

原型的方法实现 照猫画虎

JavaScript 提供了一系列内置函数，以便更为直接地访问操纵原型。三个方法分别为：

- Object.create 根据指定的原型创建新对象，原型可以是 null；
- Object.getPrototypeOf 获得一个对象的原型；
- Object.setPrototypeOf 设置一个对象的原型。

- ES6 才出现 class 类，ES5 之前都是模拟类

## JavaScript 中的对象分类

- 宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。
  - 在浏览器环境中，我们都知道全局对象是 window，window 上又有很多属性，如 document。
- 内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。
  - 固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
  - 原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。
    - JavaScript 标准中，提供了 30 多个构造器
    - 基本类型 Boolean、String、Number、Symbol、Object
    - 基础功能和数据结构 Array、Date、RegExp、Promise、Map 等
    - 错误类型 Error SyntaxError 等
    - 二进制操作 ArrayBuffer 等
    - 带类型的数组 Float32Array、int8Array 等
  - 普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。