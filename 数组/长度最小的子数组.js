// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组，并返回其长度。如果不存在符合条件的子数组，返回 0 。
// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 数组操作中一个重要的方法：滑动窗口
// 所谓滑动窗口，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。
// 窗口的起始位置如何移动：如果当前窗口的值大于s了，窗口就要向前移动了（也就是该缩小了）。
// 窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，窗口的起始位置设置为数组的起始位置就可以了。

var minSubArrayLen = function (target, nums) {
    const len = nums.length;
    let l = (r = sum = 0),
        res = len + 1;
    // 子数组最大不会超过自身
    while (r < len) {
        sum += nums[r++];
        // 窗口滑动
        while (sum >= target) {
            // r始终为开区间 [l, r)
            res = res < r - l ? res : r - l;
            sum -= nums[l++];
        }
    }
    return res > len ? 0 : res;
};
