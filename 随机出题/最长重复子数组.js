// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
// 输入：A: [1,2,3,2,1]    B: [3,2,1,4,7]
// 输出：3 ———— 长度最长的公共子数组是 [3, 2, 1]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// dp[i][j] 以下标 i - 1 为结尾的A，和以下标 j - 1 为结尾的B，最长重复子数组长度为 dp[i][j]
// dp[0][0] 总不能是以下标-1为结尾的A数组吧，所以在遍历 dp[i][j] 的时候 i 和 j 都要从1开始
// 当 nums1[i - 1] 和 nums2[j - 1] 相等的时候，dp[i][j] = dp[i - 1][j - 1] + 1
// dp[i][0] 和 dp[0][j] 初始化为0
// 外层for循环遍历 nums1，内层for循环遍历 nums2

var findLength = function (nums1, nums2) {
    // nums1、nums2数组的长度
    const [m, n] = [nums1.length, nums2.length];
    // dp数组初始化，都初始化为0
    const dp = new Array(m + 1).fill(0).map((x) => new Array(n + 1).fill(0));
    // 初始化最大长度为0
    let res = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 遇到nums1[i - 1] === nums2[j - 1]，则更新dp数组
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            // 更新res
            res = dp[i][j] > res ? dp[i][j] : res;
        }
    }
    // 遍历完成，返回res
    return res;
};
