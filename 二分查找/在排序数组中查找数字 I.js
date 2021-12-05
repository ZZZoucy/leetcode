// 统计一个数字在排序数组中出现的次数。
// 输入: nums = [5,7,7,8,8,10], target = 8     输出: 2
// 输入: nums = [5,7,7,8,8,10], target = 6     输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    // 定义上下限、找到的标志flag
    let left = 0;
    let right = nums.length - 1;
    let flag = null;

    // 二分查找
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // 如果找到了，将mid赋值给flag，存的是索引
            flag = mid;
            // 找到一个(但不一定是索引最小的一个)，直接退出循环，因为数组是有序的
            break;
        }
    }
    // while结束后，判断是否找到，没找到直接返回0
    if (flag === null) return 0;

    // 从flag开始，向两边扩散，因为数组是有序的
    left = right = flag;
    while (nums[left - 1] === target) left--;
    while (nums[right + 1] === target) right++;

    // 返回计数
    return right - left + 1;
};
