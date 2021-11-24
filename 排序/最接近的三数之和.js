// 排序 + 双指针

// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 输入：nums = [-1,2,1,-4], target = 1        输出：2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let min;
    let result;
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum === target) {
                return sum;
            } else if (sum > target) {
                r--;
            } else {
                l++;
            }
            if (result === undefined || min > Math.abs(sum - target)) {
                min = Math.abs(sum - target);
                result = sum;
            }
        }
    }
    return result;
};
