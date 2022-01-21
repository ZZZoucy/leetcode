// 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
// 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
// 输入：arr = [1,2,2,1,1,3]
// 输出：true
// 输入：arr = [1,2]
// 输出：false

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    // hash1 统计每个数字出现的次数
    const occur = new Map();
    for (const x of arr) {
        if (occur.has(x)) {
            occur.set(x, occur.get(x) + 1);
        } else {
            occur.set(x, 1);
        }
    }

    // hash2 统计不同的出现次数的数目
    const times = new Set();
    for (const [key, value] of occur) {
        times.add(value);
    }

    return occur.size === times.size;
};
