// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"    输出: 3
// 输入: s = "pwwkew"      输出: 3

/**
 * @param {string}
 * @return {number}
 */

// 如果从最小下标开始找，s[i] 在 s 中出现的位置的下标比 i 要小
// 说明在最小下标位置到当前 i 的中间出现了与 s[i] 相同的值
// 那么 minIndex 就要在 s[i] 出现的位置加 1
// 否则的话，一般是 当前的 s[i] 的下标就是 i
// 说明在最小下标位置到当前i的中间没有出现重复值，所以 s[i] 从最小下标开始找，就会在 i 的位置找到
// 那么 maxLen 的最大值就是在（maxLen，i-minIndex+1）里

var lengthOfLongestSubstring = function (s) {
    let maxlen = 0;
    let minIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], minIndex) < i) {
            minIndex = s.indexOf(s[i], minIndex) + 1;
        } else {
            maxlen = Math.max(maxlen, i - minIndex + 1);
        }
    }
    return maxlen;
};
