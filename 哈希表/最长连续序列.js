// 哈希表

// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 输入：nums = [100,4,200,1,3,2]           输出：4 —— 1234
// 输入：nums = [0,3,7,2,5,8,4,6,0,1]       输出：9 —— 012345678

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 对数组进行去重
    let hash = new Set(nums);
    let res = 0;
    // 遍历去重后的 hash
    for (let n of hash) {
        // 如果当前数的前一个数存在，那就说明有比当前数更小的数可以作为起点，所以什么都不做，继续遍历
        // 如果当前数的前一个数不存在，那就说明没有比当前数更小的数可以作为起点，所以就以当前数 n 开始向后枚举
        if (!hash.has(n - 1)) {
            let m = n;
            while (hash.has(m + 1)) m++;
            res = Math.max(res, m - n + 1); //更新答案
        }
    }
    return res;
};
