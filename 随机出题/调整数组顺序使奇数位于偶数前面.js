// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
// 输入：nums = [1, 2, 3, 4]      输出：[1, 3, 2, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    // let res = []
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] % 2 === 0){
    //         res.push(nums[i])
    //     }else{
    //         res.unshift(nums[i])
    //     }
    // }
    // return res
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] % 2 === 0 && nums[right] % 2 === 1) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
            left++;
        } else if (nums[left] % 2 === 0) {
            right--;
        } else {
            left++;
        }
    }
    return nums;
};
