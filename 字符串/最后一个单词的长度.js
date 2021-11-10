// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度
// 输入：s = "Hello World"                        输出：5
// 输入：s = "   fly me   to   the moon  "        输出：4

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let s1 = s.trim();
    let len = 0;
    for (let i = s1.length - 1; i >= 0; i--) {
        if (s1[i] === " ") {
            len = s1.length - 1 - i;
            break;
        } else {
            if (i === 0) {
                len = s1.length;
            }
        }
    }
    return len;
};
