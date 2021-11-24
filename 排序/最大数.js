// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
// 输入：nums = [10,2]             输出："210"
// 输入：nums = [3,30,34,5,9]      输出："9534330"

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    // [3,30,34,5,9] 排完是 [9, 5, 34, 3, 30]
    // 按照每个数字的第一个数字大小进行降序排序。比较 ab 和 ba 的大小进行排序，如 330 > 303，所以 3 在前，30 在后
    nums.sort((a, b) => {
        const ab = a.toString() + b.toString();
        const ba = b.toString() + a.toString();
        if (ab > ba) return -1;
        if (ab < ba) return 1;
        return 0;
    });

    // 去除开头的零
    while (nums.length > 1 && nums[0] === 0) {
        nums.shift();
    }
    return nums.join("");
};
