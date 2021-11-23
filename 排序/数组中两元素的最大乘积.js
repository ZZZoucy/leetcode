// 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
// 请你计算并返回该式的最大值。
// 输入：nums = [3,4,5,2]        输出：12 —— (4-1)*(5-1)
// 输入：nums = [1,5,4,5]        输出：16 —— (5-1)*(5-1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let max = (nums[len - 1] - 1) * (nums[len - 2] - 1);
    return max;
};
