// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
// 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

// 输入：nums = [4,3,2,7,8,2,3,1]       输出：[5,6]
// 输入：nums = [1,1]                   输出：[2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let hash = new Set();
    let res = [];
    // 先遍历 nums，把元素都放进 hash
    for (let n of nums) {
        hash.add(n);
    }
    // 遍历数字 1～n，看是否在 hash 表中，不在就插进 res 里，最后返回 res（消失的数字）
    for (let i = 1; i <= nums.length; i++) {
        if (!hash.has(i)) {
            res.push(i);
        }
    }
    return res;
};
