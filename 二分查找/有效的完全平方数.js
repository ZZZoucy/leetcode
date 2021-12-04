// 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
// 输入：num = 16       输出：true
// 输入：num = 14       输出：false

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0;
    let right = num;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        let square = mid * mid;
        if (square < num) {
            left = mid + 1;
        } else if (square > num) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
};
