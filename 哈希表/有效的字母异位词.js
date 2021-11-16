// 数组（数组也是哈希表中的一种）

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
// 输入: s = "anagram", t = "nagaram"      输出: true
// 输入: s = "rat", t = "car"              输出: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 如果 s 和 t 的长度不一样，那必然不互为字母异位词
    if (s.length !== t.length) return false;

    // 定义一个长度为 26 的值全为 0 的数组(数组也是哈希表的一种)
    // 为什么定义长度为 26 ？ 因为有 26 个字母，给每个字母一个占位
    const resSet = new Array(26).fill(0);

    // 获取到 ‘a’ 的 ASCII 码
    const base = "a".charCodeAt();

    // 遍历 s，每个字母的 ASCII 码 - ‘a’ 的 ASCII 码 正好是在 26 以内的（0～25）
    for (const i of s) {
        resSet[i.charCodeAt() - base]++;
    }

    // 遍历 t，如果 当前字母 ASCII 码 - ‘a’ 的 ASCII 码 的下标的值为 0，说明 t 中该字母不存在于 s 中，那必然不互为字母异位词
    // 否则 就让 t 中该字母在 resSet 中对应的值 - 1
    for (const i of t) {
        if (!resSet[i.charCodeAt() - base]) return false;
        resSet[i.charCodeAt() - base]--;
    }
    return true;
};
