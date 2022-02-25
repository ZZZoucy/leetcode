// 方法一：不用class，用原型链
function Animal(color) {
    this.color = color;
}
Animal.prototype.move = function () {};

function Dog(color, name) {
    Animal.call(this, color); // 关键代码1
    this.name = name;
}
Dog.prototype.say = function () {};

Dog.prototype.__proto__ = Animal.prototype; // 关键代码2
// 上述这个代码实际是不用的，要用下面三行代码去替换
function temp() {}
temp.prototype = Animal.prototype;
Dog.prototype = new temp();

const d1 = new Dog("黄色", "小黄");
console.dir(d1);

// 方法二：用class
class Animal {
    constructor(color) {
        this.color = color;
    }
    move() {}
}

class Dog extends Animal {
    constructor(color, name) {
        super(color);
        this.name = name;
    }
    say() {}
}

const d2 = new Dog("黑色", "小黑");
console.dir(d2);
