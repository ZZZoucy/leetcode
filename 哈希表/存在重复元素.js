// 给定一个整数数组，判断是否存在重复元素。
// 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
// 输入: [1,2,3,1]     输出: true
// 输入: [1,2,3,4]     输出: false

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // 哈希表
    let hash = new Set();
    // 遍历 nums
    for (let n of nums) {
        // 如果 nums 中的元素 n 在 hash 中，则表示出现重复
        // 如果 nums 中的元素 n 不在 hash 中，则表示该元素没有重复，把它添加进 hash 中
        if (hash.has(n)) {
            return true;
        }
        hash.add(n);
    }
    return false;
};
