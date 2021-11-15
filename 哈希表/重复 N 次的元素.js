// 哈希表

// 给你一个整数数组 nums ，该数组具有以下属性：
/*
nums.length == 2 * n.
nums 包含 n + 1 个 不同的 元素
nums 中恰有一个元素重复 n 次
找出并返回重复了 n 次的那个元素。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let hash = new Map();
    for (let n of nums) {
        if (hash.has(n)) {
            return n;
        } else {
            hash.set(n, 1);
        }
    }
};
