// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 快速排序 -> 以某某为基准，「以某某为基准，小的去前面，大的去后面」，只需要重复说这句话，就能实现快速排序
// 排好序之后下标为 nums.length - k 的元素

var findKthLargest = function (nums, k) {
    const num = quickSort(nums, nums.length - k, 0);
    return num;
};

function quickSort(arr, targetIndex, start) {
    if (arr.length <= 1) return arr[0];
    let left = [];
    let right = [];
    const mid = Math.floor(arr.length / 2);
    const midNum = arr.splice(mid, 1)[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > midNum) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    if (left.length + start === targetIndex) {
        return midNum;
    } else if (left.length + start > targetIndex) {
        return quickSort(left, targetIndex, start);
    } else {
        return quickSort(right, targetIndex, left.length + start + 1);
    }
}
