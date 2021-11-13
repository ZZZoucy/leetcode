// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。   1 阶 + 1 阶 、 2 阶

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // dp[i] 为第 i 阶楼梯有 dp[i] 种方法爬到楼顶
    //           1           1
    //           2           2
    //           3           3
    //           4           5

    // 初始值：dp[1] = 1，dp[2] = 2
    let dp = [1, 2];
    // 递推公式 dp[i] = dp[i - 1] + dp[i - 2]
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
};
