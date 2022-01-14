// 给你两个字符串数组 words1 和 words2 ，请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。
// 输入：words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// 输出：2
// 输入：words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// 输出：1

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    // 统计两个数组中，单词出现的次数
    const map1 = new Map();
    const map2 = new Map();
    for (const str of words1) {
        map1.set(str, (map1.get(str) || 0) + 1);
    }
    for (const str of words2) {
        map2.set(str, (map2.get(str) || 0) + 1);
    }
    let res = 0;
    // 遍历map1，找到都出现1次的单词
    for (const [word, count] of map1) {
        if (count === 1 && map2.get(word) === 1) res++;
    }
    return res;
};
