// 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。
// 题目保证至少有一个词不在禁用列表中，而且答案唯一。
// 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
// 输入:
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// 输出: "ball"

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    // hash 里包含了 hit
    let hash = new Set(banned);
    // match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
    // 过滤掉 hash 里已有的内容，也就是 hit。 所以 arr 的值是除 hit 外的其他单词
    let arr = paragraph
        .toLowerCase()
        .match(/[a-z]+/g)
        .filter((t) => !hash.has(t));
    let obj = {};
    let res = "";
    let max = 0;
    // 遍历 arr 里的单词，进行计数
    for (let a of arr) {
        // 计数
        obj[a] = (obj[a] || 0) + 1;
        // 比较是否为最大值
        if (obj[a] > max) {
            res = a;
            max = obj[a];
        }
    }
    return res;
};
