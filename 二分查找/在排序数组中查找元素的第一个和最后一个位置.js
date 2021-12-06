// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 输入：nums = [5,7,7,8,8,10], target = 8     输出：[3,4]
// 输入：nums = [5,7,7,8,8,10], target = 6     输出：[-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1,-1]
    // 寻找 minIndex 即为在数组中寻找第一个等于 target 的下标，寻找 maxIndex 即为在数组中寻找第一个大于 target 的下标 - 1
    let minIndex = binarySearch(nums,target,true)
    let maxIndex = binarySearch(nums,target,false) - 1
    // 需要重新校验我们得到的两个下标 minIndex 和 maxIndex，符合条件就返回 [minIndex,maxIndex]，不符合就返回 [-1,-1]。
    if(minIndex <= maxIndex && maxIndex < nums.length && nums[minIndex] === target && nums[maxIndex] === target){
        ans = [minIndex,maxIndex]
    }
    return ans
};

// 定义 binarySearch(nums, target, lower) 表示在 nums 数组中二分查找 target 的位置
// 如果 lower 为 true，则查找第一个等于 target 的下标，否则查找第一个大于 target 的下标
var binarySearch = function(nums, target, lower){
    let left = 0
    let right = nums.length - 1
    let ans = nums.length
    while(left <= right){
        let mid = Math.floor((right - left) / 2) + left
        if(nums[mid] > target || (lower && nums[mid] >= target)){
            right = mid - 1
            ans = mid
        }else{
            left = mid + 1
        }
    }
    return ans
}