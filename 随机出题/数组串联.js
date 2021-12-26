// 给你一个长度为 n 的整数数组 nums 。请你构建一个长度为 2n 的答案数组 ans ，数组下标 从 0 开始计数 ，对于所有 0 <= i < n 的 i ，满足下述所有要求：
// ans[i] == nums[i]
// ans[i + n] == nums[i]
// 具体而言，ans 由两个 nums 数组 串联 形成。
// 输入：nums = [1, 2, 1]        输出：[1, 2, 1, 1, 2, 1]
// 输入：nums = [1,3,2,1]        输出：[1,3,2,1,1,3,2,1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let len = nums.length;
    let ans = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        ans[i] = nums[i];
        ans[i + len] = nums[i];
    }
    return ans;
};
