// 给你一个 从 0 开始的排列 nums（下标也从 0 开始）。
// 请你构建一个 同样长度 的数组 ans ，其中，对于每个 i（0 <= i < nums.length），都满足 ans[i] = nums[nums[i]] 。
// 输入：nums = [0,2,1,5,3,4]      输出：[0,1,2,4,5,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    let ans = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
};
