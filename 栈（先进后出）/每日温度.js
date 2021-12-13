// 请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
// 输入: temperatures = [73,74,75,71,69,72,76,73]       输出: [1, 1, 4, 2, 1, 1, 0, 0]
// 输入: temperatures = [30,40,50,60]                   输出: [1,1,1,0]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // 存放答案的数组
    let res = new Array(temperatures.length);
    // 这里放元素索引，而不是元素
    let stack = [];
    // 倒着往栈里放
    for (let i = temperatures.length - 1; i >= 0; i--) {
        // 想像成人的身高，判定个子高矮
        while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            // 矮个起开，反正也被挡着了。。。
            stack.pop();
        }
        // 得到索引间距
        res[i] = stack.length ? stack[stack.length - 1] - i : 0;
        // 将索引入栈，而不是元素
        stack.push(i);
    }
    return res;
};
