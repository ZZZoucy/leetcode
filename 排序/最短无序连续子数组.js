// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
// 输入：nums = [2,6,4,8,10,9,15]        输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 输入：nums = [1,2,3,4]                输出：0

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    //将nums进行升序操作，与原数组进行前后比较，找出索引差
    let arr = [...nums].sort((a, b) => a - b);
    let l = 0;
    let r = 0;
    for (let i = 0; i < nums.length; i++) {
        if (arr[i] !== nums[i]) {
            l = i;
            break;
        }
    }
    for (let j = nums.length - 1; j >= 0; j--) {
        if (arr[j] !== nums[j]) {
            r = j;
            break;
        }
    }
    if (l === 0 && r === 0) {
        return 0;
    }
    return r - l + 1;
};
