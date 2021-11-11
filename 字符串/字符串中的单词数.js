// 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
// 输入: "Hello, my name is John"      输出: 5

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let Count = 0;
    for (let i = 0; i < s.length; i++) {
        // 一个字母的前一位是空，那么这个字母开头，是一个单词
        if ((i === 0 || s[i - 1] === " ") && s[i] !== " ") {
            Count++;
        }
    }
    return Count;
};
