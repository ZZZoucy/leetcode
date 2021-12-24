// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 输入："Let's take LeetCode contest"     输出："s'teL ekat edoCteeL tsetnoc"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let res = [];
    s;
    let length = s.length;
    let i = 0;
    while (i < length) {
        let start = i;
        while (i < length && s.charAt(i) != " ") {
            i++;
        }
        for (let p = start; p < i; p++) {
            res.push(s.charAt(start + i - 1 - p));
        }
        while (i < length && s.charAt(i) == " ") {
            i++;
            res.push(" ");
        }
    }
    return res.join("");
};
