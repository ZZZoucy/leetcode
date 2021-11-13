// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
// 输入: s1 = "abc", s2 = "bca"      输出: true
// 输入: s1 = "abc", s2 = "bad"      输出: false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
    let ss1 = s1.split("").sort().join("");
    let ss2 = s2.split("").sort().join("");
    return ss1 === ss2;
};
