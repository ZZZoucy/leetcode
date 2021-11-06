// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 输入: nums = [1,3,5,6], target = 5       输出: 2
// 输入: nums = [1,3,5,6], target = 2       输出: 1
// 输入: nums = [1,3,5,6], target = 7       输出: 4
// 输入: nums = [1,3,5,6], target = 0       输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // for循环
    /*
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index = i;
        } else if (nums[i] < target && nums[i + 1] > target) {
            index = i + 1;
        } else if (target >= nums[nums.length - 1]) {
            index = nums.length;
        } else if (target <= nums[0]) {
            index = 0;
        }
    }
    return index;
    */

    // 二分查找
    let left = 0,
        len = nums.length,
        right = len - 1,
        res = len;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target <= nums[mid]) {
            res = mid;
            right = mid - 1;
        }
    }
    return res;
};
