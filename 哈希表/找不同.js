// 哈希表

// 给定两个字符串 s 和 t，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。

// 输入：s = "abcd", t = "abcde"        输出："e"
// 输入：s = "", t = "y"                输出："y"

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const map = new Map();
    // 先遍历 s，把 s 的元素放进 map 中，
    for (let i = 0; i < s.length; i++) {
        const val = map.get(s[i]);
        map.set(s[i], val === undefined ? 1 : val + 1);
    }
    // 再遍历 t，如果 val 为0或者undefined，说明没有出现该元素，那么该元素就是被添加的字母
    for (let i = 0; i < t.length; i++) {
        const val = map.get(t[i]);
        if (val === 0 || val === undefined) {
            return t[i];
        } else {
            map.set(t[i], val - 1);
        }
    }
};
