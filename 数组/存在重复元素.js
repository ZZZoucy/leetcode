// 给定一个整数数组，判断是否存在重复元素。
// 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    let count;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            count = 1;
            break;
        } else {
            count = 0;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
};
