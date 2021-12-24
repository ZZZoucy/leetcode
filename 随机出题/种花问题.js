// 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。
// 输入：flowerbed = [1,0,0,0,1], n = 1        输出：true
// 输入：flowerbed = [1, 0, 0, 0, 1], n = 2        输出：false

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0, length = flowerbed.length; i < length; i++) {
        //当前位置是0，并且前后都不是1，考虑在最前和最后的特殊情况
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            count++;
            i++;
        }
    }
    return count >= n;
};
