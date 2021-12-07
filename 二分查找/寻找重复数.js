// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
// 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
// 输入：nums = [1,3,4,2,2]     输出：2
// 输入：nums = [3,1,3,4,2]     输出：3

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    // left right 为数值区间而不是下标
    let left = 1;
    let right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        // 计算小于等于mid的数字个数
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) count++;
        }
        // 假设mid=4，小于等于4的数只能为[1,2,3,4] 4个；如果大于4个，说明[1,4]有重复数字
        if (count > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    // 此时有left = right 即为重数数字
    return left;
};
