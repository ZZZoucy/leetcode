//给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。每种硬币的数量是无限的。

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// dp[j]：凑足总额为j所需钱币的最少个数为dp[j]
// 递推公式：dp[j] = min(dp[j - coins[i]] + 1, dp[j]);
// coins（物品）放在外循环，target（背包）在内循环。且内循环正序。
var coinChange = function (coins, amount) {
    if (!amount) {
        return 0;
    }

    let dp = Array(amount + 1).fill(Infinity); // 用默认内容初始化数组
    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
