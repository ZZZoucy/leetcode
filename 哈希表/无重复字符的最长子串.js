// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"    输出: 3
// 输入: s = "pwwkew"      输出: 3

/**
 * @param {string}
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    // 哈希集合，记录每个字符是否出现过
    const hash = new Set();
    const len = s.length;
    // 右指针，初始值为0
    let r = 0,
        res = 0;
    for (let i = 0; i < len; ++i) {
        if (i !== 0) {
            // 左指针向右移动一格，移除一个字符
            // 让 hash 清空，好记录下一个无重复子串的长度
            hash.delete(s[i - 1]);
        }
        while (r < len && !hash.has(s[r])) {
            // 不断地移动右指针
            hash.add(s[r]);
            ++r;
        }
        // 第 i 到 r 个字符是一个极长的无重复字符子串
        res = Math.max(res, r - i);
    }
    return res;
};
