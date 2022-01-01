// 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。
// 输入：[4,2,1]           输出：4

/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < coins.length; i++) {
        count = Math.ceil(coins[i] / 2);
        sum += count;
    }
    return sum;
};
