// 给你一个目标数组 target 和一个整数 n。每次迭代，需要从  list = {1,2,3..., n} 中依序读取一个数字。

// 请使用下述操作来构建目标数组 target ：
// Push：从 list 中读取一个新元素， 并将其推入数组中。
// Pop：删除数组中的最后一个元素。

// 输入：target = [1,3], n = 3          输出：["Push", "Push", "Pop", "Push"]
// 解释：
// 读取 1 并自动推入数组 -> [1]
// 读取 2 并自动推入数组，然后删除它 -> [1]
// 读取 3 并自动推入数组 -> [1,3]

// 输入：target = [1,2], n = 4          输出：["Push","Push"]
// 解释：只需要读取前 2 个数字就可以停止。

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let stack = [];
    let len = target.length;
    // 如果 target 的最后一个元素不是 n，那么只需要遍历 1～target[len-1] 就可以了，如 target=[1,2],n=4
    let num = target[len - 1] < n ? target[len - 1] : n;
    // 遍历数字 1～num，判断是否在target中，如果在就添加'Push'，如果不在说明要'Push'后再'Pop'
    for (let i = 1; i <= num; i++) {
        if (target.includes(i)) {
            stack.push("Push");
        } else {
            stack.push("Push", "Pop");
        }
    }
    return stack;
};
