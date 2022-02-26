const eventHub = {
    // 函数要有输入和输出
    // 每调用一个函数，就要把函数放进 任务队列
    // 每一个任务的名称都要对应一个队列，所以是映射关系，也就是哈希 map
    queueMap: {
        // click: [f1 , f2]
    },
    on: (name, fn) => {
        eventHub.queueMap[name] = eventHub.queueMap[name] || []; // 防止初始值为空，这设计模式叫 防御式编程
        // 入队
        eventHub.queueMap[name].push(fn);
    },
    off: (name, fn) => {
        const q = eventHub.queueMap[name]; // 这设计模式叫 alias 别名法，最好在 只做读操作时 使用
        if (!q) {
            return;
        }
        const index = q.indexOf(fn);
        // 如果 index 小于 0 ，说明没有 fn 任务，直接结束。这设计模式叫 短路法
        if (index < 0) {
            return;
        }
        q.splice(index, 1);
    },
    emit: (name, data) => {
        const q = eventHub.queueMap[name];
        if (!q) {
            return;
        }
        // 遍历 q
        q.map((f) => f.call(undefined, data));
        return undefined;
    }, // trigger
};

eventHub.on("click", console.log); // 监听事件，监听 click 事件时调用 console.log
eventHub.on("click", console.error); // 监听事件，监听 click 事件时调用 console.error
// eventHub.off("click", f1); // 取消监听事件

setTimeout(() => {
    eventHub.emit("click", "hi"); // 触发监听事件
}, 3000);
