// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有和为 0 且不重复的三元组。
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    const len = nums.length;
    if (len < 3) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < len - 2; i++) {
        // 如果当前值大于 0，和右侧的值再怎么加也不会等于 0，所以直接退出
        if (nums[i] > 0) break;
        // 当前循环的值和上次循环的一样，就跳过，避免重复值
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        // 双指针
        let l = i + 1,
            r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
                continue;
            }
            if (sum > 0) {
                r--;
                continue;
            }
            res.push([nums[i], nums[l], nums[r]]);
            // b c 去重
            while (l < r && nums[l] === nums[++l]);
            while (l < r && nums[r] === nums[--r]);
        }
    }
    return res;
};
