// 给定两个数组，编写一个函数来计算它们的交集。
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]         输出：[2]
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]     输出：[9,4]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 先对数组进行去重、排序
    var nums1 = Array.from(new Set(nums1));
    var nums2 = Array.from(new Set(nums2));
    nums1.sort((a, b) => a - b);
    let res = new Array();
    for (let i = 0; i < nums2.length; i++) {
        // 通过二分法查找，判断num2[i]是否存在于num1中
        if (binarySearch(nums1, nums2[i])) {
            res.push(nums2[i]);
        }
    }
    return res;
};

// 二分法查找
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}
