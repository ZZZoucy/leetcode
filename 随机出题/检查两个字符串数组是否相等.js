// 给你两个字符串数组 word1 和 word2 。如果两个数组表示的字符串相同，返回 true ；否则，返回 false 。
// 数组表示的字符串 是由数组中的所有元素 按顺序 连接形成的字符串。
// 输入：word1 = ["ab", "c"], word2 = ["a", "bc"]      输出：true
// 输入：word1 = ["ab", "c"], word2 = ["a", "bc"]      输出：true

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let w1 = word1.join("");
    let w2 = word2.join("");
    return w1 === w2;
};
