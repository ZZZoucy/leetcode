// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
// 输入：nums = [1,2,3]          输出：6
// 输入：nums = [-1,-2,-3]       输出：-6

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let len = nums.length;
    nums.sort((a, b) => a - b);
    // 如果存在负数，至少要最小的两个负数相乘再乘以最大数才会有可能是最大值（正数）
    // 否则的话肯定是最大的三个数相乘才是最大值
    return Math.max(Number(nums[0]) * Number(nums[1]) * Number(nums[len - 1]), Number(nums[len - 3]) * Number(nums[len - 2]) * Number(nums[len - 1]));
};
