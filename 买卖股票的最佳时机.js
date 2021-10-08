// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 输入：[7,1,5,3,6,4]
// 输出：5

/**
 * @param {number[]} prices
 * @return {number}
 */

// dp[i][1] 表示第i天不持有股票所得最多现金
// dp[i][0] 表示第i天持有股票所得最多现金
// 一开始现金是0，那么加入第i天买入股票现金就是 -prices[i]
// 如果第i天持有股票即dp[i][0]，那么dp[i][0]应该选所得现金最大的，所以 dp[i][0] = max(dp[i - 1][0], -prices[i]);
// 如果第i天不持有股票即dp[i][1]，dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0]);
// 由dp[i][0] = max(dp[i - 1][0], -prices[i]); 和 dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0])
// 可以看出其基础都是要从dp[0][0]和dp[0][1]推导出来

var maxProfit = function (prices) {
    const len = prices.length;
    const dp = new Array(len).fill([0, 0]);
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        dp[i] = [Math.max(dp[i - 1][0], -prices[i]), Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])];
    }
    return dp[len - 1][1];
};
