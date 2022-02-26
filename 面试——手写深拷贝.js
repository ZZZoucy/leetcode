// 方法一：用JSON
const b = JSON.parse(JSON.stringify(a));
/*
用 JSON 的缺点：
    1. 不支持Date、正则、undefined、函数等数据
    2. 不支持引用（即环状结构）
*/

// 方法二：用递归（必会）
// 要点：
//     1. 递归
//     2. 判断类型
//     3. 检查环
//     4. 不拷贝原型上的属性
function deepClone(a, cache) {
    if (!cache) {
        cache = new Map();
    }
    let result;
    if (a instanceof Object) {
        if (cache.get(a)) {
            return cache.get(a);
        }
        if (a instanceof Function) {
            if (a.prototype) {
                result = function () {
                    return a.apply(this, arguments);
                };
            } else {
                result = (...args) => {
                    return a.call(undefined, ...args);
                };
            }
        } else if (a instanceof Array) {
            result = [];
        } else if (a instanceof Date) {
            result = new Date(a - 0);
        } else if (a instanceof RegExp) {
            result = new RegExp(a.source, a.flags);
        } else {
            result = {};
        }
        cache.set(a, result);
        for (let key in a) {
            if (a.hasOwnProperty(key)) {
                result[key] = deepClone(a[key], cache);
            }
        }
        return result;
    } else {
        return a;
    }
}
const a = {
    number: 1,
    bool: false,
    str: "hi",
    empty1: undefined,
    empty2: null,
    array: [
        { name: "frank", age: 18 },
        { name: "jacky", age: 19 },
    ],
    date: new Date(2000, 0, 1, 20, 30, 0),
    regex: /\.(j|t)sx/i,
    obj: { name: "frank", age: 18 },
    f1: (a, b) => a + b,
    f2: function (a, b) {
        return a + b;
    },
};
a.self = a;

const b = deepClone(a);

b.self === b; // true
b.self = "hi";
a.self !== "hi"; //true
