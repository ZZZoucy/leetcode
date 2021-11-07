// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 输入: [2,2,1]       输出: 1
// 输入: [4,1,2,1,2]   输出: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // 先排序，排序完之后相同的数字就会在前后的位置
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        // 只不过如果碰到两个相同的数字了，就得让下标多 +1
        if (nums[i] === nums[i + 1]) {
            i++;
        } else {
            return nums[i];
        }
    }
};
