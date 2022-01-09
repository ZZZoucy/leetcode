// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
// 输入：x = 121           输出：true
// 输入：x = -121          输出：false

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    if (x < 0 || (!(x % 10) && x)) return false;
    let x2 = x,
        res = 0;
    while (x2) {
        res = res * 10 + (x2 % 10);
        // ~~取整
        x2 = ~~(x2 / 10);
    }
    return res === x;
};
