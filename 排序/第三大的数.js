// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
// 输入：[3, 2, 1]          输出：1
// 输入：[1, 2]             输出：2          解释：第三大的数不存在, 所以返回最大的数 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => b - a);
    let newNums = Array.from(new Set(nums));
    let len = newNums.length;
    if (len < 3) {
        return newNums[0];
    }
    return newNums[2];
};
