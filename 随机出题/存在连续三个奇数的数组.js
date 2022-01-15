// 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
// 输入：arr = [2,6,4,1]                   输出：false
// 输入：arr = [1,2,34,3,4,5,7,23,12]      输出：true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let res;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
            res = 1;
            break;
        } else {
            res = 0;
        }
    }
    return res === 1;
};
