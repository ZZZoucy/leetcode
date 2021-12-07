// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
// 在范围0～n - 1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
// 输入: [0,1,3]                 输出: 2
// 输入: [0,1,2,3,4,5,6,7,9]     输出: 8

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        // 因为数字是0～n-1，那么每一个数字都等于他们的下标
        if (nums[mid] === mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
