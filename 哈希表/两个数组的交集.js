// 数组（数组也是哈希表中的一种）

// 给定两个数组，编写一个函数来计算它们的交集。 输出结果中的每个元素一定是唯一的。
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]         输出：[2]
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]     输出：[9,4]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 要求输出结果中的每个元素一定是唯一的，所以先给每个数组去重再进行比较
    let n1 = new Set(nums1);
    let n2 = new Set(nums2);
    let res = [];

    for (let i of n1) {
        for (let j of n2) {
            if (i === j) res.push(i);
        }
    }
    return res;
};
