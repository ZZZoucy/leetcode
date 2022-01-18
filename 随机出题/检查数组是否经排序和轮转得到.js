// 给你一个数组 nums 。nums 的源数组中，所有元素与 nums 相同，但按非递减顺序排列。
// 如果 nums 能够由源数组轮转若干位置（包括 0 个位置）得到，则返回 true ；否则，返回 false 。
// 输入：nums = [3,4,5,1,2]        输出：true
// 输入：nums = [2,1,3,4]          输出：false
// 输入：nums = [1,1,1]            输出：true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    // 如果出现轮转，那么第一个数一定大于最后一个数
    let isLunzhuan = nums[0] >= nums[nums.length - 1];

    // 遍历数组
    // 如果是排序得到，则 nums[i] <= nums[i+1]
    // 如果出现 nums[i] > nums[i+1] ，要么是轮转，要么是不符合要求的
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            // 如果是轮转的话，nums[i] > nums[i+1] 只能出现一次，所以出现后 isLunzhuan 就得为 false
            // 再出现一次 nums[i] > nums[i+1] ，那就说明是不符合要求的，直接返回 false
            if (isLunzhuan) {
                isLunzhuan = false;
            } else {
                return false;
            }
        }
    }
    return true;
};
