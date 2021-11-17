// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
// 输入: nums = [0,1]       输出: 2
// 输入: nums = [0,1,0]     输出: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let hash = new Map();
    // 把 0 替换成 -1
    hash.set(0, -1);
    let res = 0;
    let s = 0;

    for (let i = 0; i < nums.length; i++) {
        s += nums[i] ? 1 : -1;
        if (hash.has(s)) {
            res = Math.max(res, i - hash.get(s));
        } else {
            hash.set(s, i);
        }
    }
    return res;
};
