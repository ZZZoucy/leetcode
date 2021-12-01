// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 第一次翻转：[7,6,5,4,3,2,1]
// 第二次翻转：[5,6,7,4,3,2,1]
// 第三次翻转：[5,6,7,1,2,3,4]
var rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};

const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
};
