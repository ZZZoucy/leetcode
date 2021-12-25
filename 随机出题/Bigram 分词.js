// 给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，其中 second 紧随 first 出现，third 紧随 second 出现。
// 对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。
// 输入：text = "alice is a good girl she is a good student", first = "a", second = "good"
// 输出：["girl","student"]
// 输入：text = "we will we will rock you", first = "we", second = "will"
// 输出：["we","rock"]

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    // 将字符串转为数组，按空格来分割元素
    const words = text.split(" ");
    const list = [];
    for (let i = 2; i < words.length; i++) {
        if (words[i - 2] === first && words[i - 1] === second) {
            list.push(words[i]);
        }
    }
    return list;
};
