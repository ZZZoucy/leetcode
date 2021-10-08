// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6

/**
 * @param {number[]} nums
 * @return {number}
 */

// 贪心算法：贪在 如果 -2 1 在一起，计算起点一定是从 1 开始，负数会拉低和
// 局部最优：当前“连续和”为负数就立刻放弃
// 全局最优：选取最大“连续和”
// 遍历 nums，从头开始用 count 累计
// 如果 count 一旦加上 bums[i] 变成负数，那就从 nums[i+1]开始从 0 累计 count
// 如果 count 大于 result，那么让 result 等于 count
// result 相当于记录最大子序和区间和（变相的算是调整了终止位置）

var maxSubArray = function (nums) {
    let result = -Infinity;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        if (count > result) {
            result = count;
        }
        if (count < 0) {
            count = 0;
        }
    }
    return result;
};
