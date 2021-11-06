// 给出一个整型数组 numbers 和一个目标值 target，请在数组中找出两个加起来等于目标值的数的下标，返回的下标按升序排列。
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]

// 定义一个空 hash 表
// 用 target - nums[i] 求出差值
// 如果这个差值没有出现在 hash表 中，就带上下标插入
// 如果这个差值已经在 hash表 中，那么就将两个下标输入即可 return [hash[n], i];
// hash[nums[i]] = i;   =>  hash 表中 nums[i] 的下标为 i

/**
 *
 * @param numbers int整型一维数组
 * @param target int整型
 * @return int整型一维数组
 */
function twoSum(nums, target) {
    //
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        if (hash[n] !== undefined) {
            return [hash[n], i];
        }
        hash[nums[i]] = i;
    }
    return [];

    // 暴力解法
    /*
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr = [i, j];
            }
        }
    }
    return arr;
    */
}
