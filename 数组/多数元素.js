// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 输入：[2,2,1,1,1,2,2]    输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */

// 摩尔投票法
// start = 2  count = 1
// 后面出现 2 就让 count +1 ； 不是 2 就让 count -1
// 当 count = 0 的时候说明 i 之前出现的数字次数都是一样的
// 那就让 start 重新等于下一个数，再次进行比较

var majorityElement = function (nums) {
    let start = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === start) {
            count++;
        } else {
            count--;
            if (count === 0) {
                start = nums[i + 1];
                count = 1;
                i++;
            }
        }
    }
    return start;
};
