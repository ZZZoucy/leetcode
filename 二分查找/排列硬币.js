// 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。
// 给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。
// 输入：n = 5    输出：2
// 输入：n = 8    输出：3

/**
 * @param {number} n
 * @return {number}
 */
// 数学公式：完成k行完整阶梯需要硬币数量为：k*(k+1)/2
var arrangeCoins = function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
        let mid = Math.floor((right - left + 1) / 2) + left;
        if (mid * (mid + 1) <= 2 * n) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
