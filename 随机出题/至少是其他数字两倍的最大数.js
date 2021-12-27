// 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。
// 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。
// 输入：nums = [3, 6, 1, 0]          输出：1
// 输入：nums = [1,2,3,4]             输出：-1

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let temp = nums.map((item) => {
        return item;
    });
    nums.sort((a, b) => a - b);
    let len = nums.length;
    if (len === 1) return 0;
    if (nums[len - 1] >= nums[len - 2] * 2) {
        return temp.indexOf(nums[len - 1]);
    } else {
        return -1;
    }
};
