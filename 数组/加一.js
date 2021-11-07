// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 输入:[1,2,3]   输出：[1,2,4]
// 输入:[1,2,9]   输出：[1,3,0]
// 输入:[9,9]     输出：[1,0,0]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length;
    // 从后往前遍历 digits，找到最后一个不为 9 的位置
    // 找到后，该位置 +1，后面的位置全为 0
    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i] += 1;
            for (let j = i + 1; j < len; ++j) {
                digits[j] = 0;
            }
            return digits;
        }
    }
    // digits 中所有的元素均为 9
    const ans = new Array(len + 1).fill(0);
    ans[0] = 1;
    return ans;
};
