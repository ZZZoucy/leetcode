// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    // 普通方法
    // 遍历 nums2，把 nums2 添加到 nums1 里面，再进行 sort 排序
    /*
    for (let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i];
    }
    nums1.sort((a, b) => a - b);
    */

    // 双指针
    // 将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中
    // 为两个数组分别设置一个指针 p1 与 p2
​
  来作为队列的头部指针
    let started = new Array(m + n).fill(0);
    var cur;
    let p1 = 0,
        p2 = 0;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        started[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i !== m + n; i++) {
        nums1[i] = started[i];
    }
};
