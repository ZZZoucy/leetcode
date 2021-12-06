// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
// 输入：nums = [4,5,6,7,0,1,2], target = 0            输出：4
// 输入：nums = [4,5,6,7,0,1,2], target = 3            输出：-1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    if (!nums.length) return -1;
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        // 判断mid 和 nums[0] 的大小关系，确立 mid 所在的区间
        // 在左侧升序区间中
        if (nums[mid] >= nums[left]) {
            // 若target >= left 同时 target < mid, 说明 target 在 mid 的左侧，应该在 [left, mid] 之间找
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
                // 否则 target 在 mid 的右侧，在 [mid, right] 之间找
            } else {
                left = mid + 1;
            }
            // 在右侧升序区间中
        } else {
            // 若target > mid 同时 target <= right , 说明 target 在 mid 的右侧，应该在 [mid, right] 之间找
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
                // 否则 target 在 mid 的左侧，应该在 [left, mid] 之间找
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};
