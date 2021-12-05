// 给定一个已按照 非递减顺序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
// 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。
// 输入：numbers = [2,7,11,15], target = 9      输出：[1,2]
// 输入：numbers = [2,3,4], target = 6          输出：[1,3]

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let len = numbers.length;
    let left = 0;
    let right = len - 1;
    // 循环数组，固定左边的数
    for (let i = 0; i < len; ++i) {
        left = i + 1;
        // 二分查找右边的数
        while (left <= right) {
            let mid = Math.floor((right - left) / 2) + left;
            if (numbers[mid] === target - numbers[i]) {
                return [i + 1, mid + 1];
            } else if (numbers[mid] > target - numbers[i]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return [-1, -1];
};
