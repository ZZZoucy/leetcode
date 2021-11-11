// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
// 输入: s = "leetcode"      输出: false
// 输入: s = "abc"           输出: true

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    for (let i = 0; i < astr.length; i++) {
        for (j = i + 1; j < astr.length; j++) {
            if (astr[i] === astr[j]) {
                return false;
            }
        }
    }
    return true;
};
