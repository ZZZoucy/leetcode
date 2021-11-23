// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// 输入：nums = [-4,-1,0,3,10]     输出：[0,1,9,16,100]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // 双指针
    /* 
    let res = []
    let len = nums.length
    let r = len - 1

    for(let i = 0, j = r; i <= j;){
        if(nums[i]**2 < nums[j]**2){
            res[r--] = nums[j]**2
            j--
        }else if(nums[i]**2 >= nums[j]**2){
            res[r--] = nums[i]**2
            i++
        }
    }
    return res
    */

    // 直接排序
    let nums2 = nums.map((i) => i ** 2);
    return nums2.sort((a, b) => a - b);
};
