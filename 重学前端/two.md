# two

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