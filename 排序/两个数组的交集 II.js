// 给定两个数组，编写一个函数来计算它们的交集。
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort();
    nums2.sort();
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                res.push(nums2[j]);
                nums2.splice(j, 1);
                break;
            }
        }
    }
    return res;
};
