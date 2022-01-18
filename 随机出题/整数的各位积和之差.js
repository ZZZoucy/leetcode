// 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
// 输入：n = 234       输出：15
// 解释：
// 各位数之积 = 2 * 3 * 4 = 24
// 各位数之和 = 2 + 3 + 4 = 9
// 结果 = 24 - 9 = 15

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let str = n.toString().split("");
    let sum = Number(str[0]);
    let mul = str[0];
    for (let i = 1; i < str.length; i++) {
        sum += Number(str[i]);
        mul *= str[i];
    }
    return mul - sum;
};
