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