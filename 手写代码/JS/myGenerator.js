// 实现的意义将 object 对象转换成可以遍历的
function* objEntires(obj) {
    const propKeys = Reflect.ownKeys(obj);
    for (const propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

let obj = { name: 'zs', age: 18 };

for (const [key, value] of objEntires(obj)) {
    console.log(`${key}:${value}`);
}

function* foo() {
    const value = yield 3 + 3;
    return value;
}

const f = foo(); // 此时是不会执行的

console.log(f.next());
console.log(f.next(10));
console.log(f.next(20));

// { value: 6, done: false }
// { value: 10, done: true }
// { value: undefined, done: true }