// 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
// 输入：nums = [3, 4, 5, 1, 2]        输出：1
// 输入：nums = [11, 13, 15, 17]          输出：11

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let right = nums.length - 1;
    let left = 0;
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left];
};
