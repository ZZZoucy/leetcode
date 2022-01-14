// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
// 输入：n = 6     输出：true
// 输入：n = 1     输出：true

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) return false;
    let arr = [2, 3, 5];
    for (const a of arr) {
        while (n % a === 0) {
            n /= a;
        }
    }
    return n === 1;
};
