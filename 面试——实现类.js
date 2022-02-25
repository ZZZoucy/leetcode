// 方法一：不使用class，用原型
function Dog(name) {
    this.name = name;
    this.legsNumber = 4;
}
Dog.prototype.say = function () {
    console.log(`汪汪汪～我是${this.name}，我有${this.legsNumber}条腿。`);
};
const d1 = new Dog("小黄"); // Dog 函数就是一个类
d1.say();

// 方法二：使用class
class Dog {
    constructor(name) {
        this.name = name;
        this.legsNumber = 4;
    }
    say() {
        console.log(`汪汪汪～我是${this.name}，我有${this.legsNumber}条腿。`);
    }
}
const d2 = new Dog("小黑");
d2.say();
