// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
// 输入：["CQueue","appendTail","deleteHead","deleteHead"]      [[],[3],[],[]]
// 输出：[null,null,3,-1]

var CQueue = function () {
    // 双栈实现队列的意思就是不可以使用shift()
    // 只能通过 push() 和 pop() 实现
    this.stack1 = [];
    this.stack2 = [];
};

CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value);
    return null;
};

CQueue.prototype.deleteHead = function () {
    if (!(this.stack1.length || this.stack2.length)) return -1; // 两个栈都空了才返回 -1
    if (!this.stack2.length) {
        // 只有每次 (出栈)stack2 空了，才将 (入栈)stack1 中的元素加入到 stack2
        // 这样才可以保证 队列的 特性: 先进先出
        while (this.stack1.length) {
            let val = this.stack1.pop();
            this.stack2.push(val);
        }
    }
    return this.stack2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
