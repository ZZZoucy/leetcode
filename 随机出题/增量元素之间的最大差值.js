// 给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。
// 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。
// 输入：nums = [7,1,5,4]          输出：4
// 输入：nums = [9, 4, 3, 2]       输出：-1
// 输入：nums = [1,5,2,10]         输出：9

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumDifference(nums) {
    let left = 0;
    let max = -1;
    for (let right = 1; right < nums.length; right++) {
        if (nums[left] < nums[right] && left < right) {
            max = Math.max(max, nums[right] - nums[left]);
            continue;
        }
        left++;
        right = left;
    }
    return max;
}
