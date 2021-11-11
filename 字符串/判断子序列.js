// 双指针

// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
// 输入：s = "abc", t = "ahbgdc"        输出：true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0, // i 是 s 的指针
        j = 0; // j 是 t 的指针
    while (i < s.length && j < t.length) {
        // 如果在 j 里面找到了 s[i]，那么 i++，说明该位置的值在 t 中存在，可以继续寻找
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    // 最后如果 i 等于 s的长度了，说明 s 的每一个位置的值都存在于 t 中
    return i === s.length;
};
