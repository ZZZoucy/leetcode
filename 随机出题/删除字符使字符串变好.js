// 一个字符串如果没有 三个连续 相同字符，那么它就是一个 好字符串 。
// 给你一个字符串 s ，请你从 s 删除 最少 的字符，使它变成一个 好字符串 。
// 输入：s = "leeetcode"       输出："leetcode"
// 输入：s = "aaabaaaa"        输出："aabaa"

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let count = 0;
    let res = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
            if (count < 2) {
                res.push(s[i]);
            }
        } else {
            count = 0;
            res.push(s[i]);
        }
    }
    return res.join("");
};
