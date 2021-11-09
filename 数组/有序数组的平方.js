// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // 方法一
    /*
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2;
    }
    return nums.sort((a, b) => a - b);
    */

    // 方法二：双指针
    let len = nums.length;
    let res = new Array(len);
    let k = len - 1;

    for (let i = 0, j = len - 1; i <= j; ) {
        if (nums[i] ** 2 > nums[j] ** 2) {
            res[k--] = nums[i] ** 2;
            i++;
        } else {
            res[k--] = nums[j] ** 2;
            j--;
        }
    }
    return res;
};
