// 滑动窗口

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"        输出: 3
// 输入: s = "bbbbb"           输出: 1

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 滑动窗口，一个 i 去遍历整个 s，minIndex 指从哪个位置开始查是否重复
    let maxlen = 0;
    let minIndex = 0;
    for (let i = 0; i < s.length; i++) {
        // 如果 i 位上的字符串在前面有重复的，那么它的下标一定小于当前 i
        if (s.indexOf(s[i], minIndex) < i) {
            minIndex = s.indexOf(s[i], minIndex) + 1; // 如果重复了，minIndex 就要从 重复的最小下标位 +1
        } else {
            maxlen = Math.max(maxlen, i - minIndex + 1); // 子串最大长度的话，是 之前的最大长度 与 新 i-minIndex+1 中的较大值
        }
    }
    return maxlen;
};
