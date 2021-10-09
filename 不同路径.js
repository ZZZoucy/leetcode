// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。
// 想要求dp[i][j]，只能有两个方向来推导出来，即dp[i - 1][j] 和 dp[i][j - 1]。
// dp[i - 1][j] ] 表示从(0, 0)的位置到(i - 1, j)有几条路径，dp[i][j - 1]同理。
// 所以 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
// 初始化的 dp[i][0] 一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理。

var uniquePaths = function (m, n) {
    const dp = Array(m)
        .fill()
        .map((item) => Array(n));
    for (let i = 0; i < m; ++i) {
        dp[i][0] = 1;
    }
    for (let i = 0; i < n; ++i) {
        dp[0][i] = 1;
    }
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
