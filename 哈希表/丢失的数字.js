// 哈希表

// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
// 输入：nums = [3,0,1]      输出：2
// 输入：nums = [0,1]        输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let hash = new Set();
    // 遍历 nums，把每一个元素放进 hash 中
    for (let i = 0; i < n; i++) {
        hash.add(nums[i]);
    }
    // 遍历数字 0 ～ n
    // 如果在 hash 中，说明没有丢失
    let missing = -1;
    for (let i = 0; i <= n; i++) {
        if (!hash.has(i)) {
            missing = i;
            break;
        }
    }
    return missing;
};
