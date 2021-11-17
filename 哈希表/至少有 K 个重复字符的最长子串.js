// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串
// 要求该子串中的每一字符出现次数都不少于 k ，返回这一子串的长度。
// 输入：s = "aaabb", k = 3         输出：3
// 输入：s = "ababbc", k = 2        输出：5

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    // same 存放出现了至少 k 次的字符
    let same = [];
    if (s.length < k) {
        return 0;
    }
    let slen = s.length;
    for (let i = 0; i < slen; i++) {
        if (!same.includes(s[i])) {
            // count 统计每个字符出现的次数
            let count = 0;
            for (let j = 0; j < slen; j++) {
                if (s[j] === s[i]) {
                    count = count + 1;
                }
            }
            // 如果次数小于 k，就将字符串根据该字母划分为数组，这样的话不符合次数的字母就自动被删除了
            // 如果次数大于等于 k，就放进 same
            if (count < k) {
                return Math.max(...s.split(s[i]).map((_s) => longestSubstring(_s, k)));
            } else {
                same.push(s[i]);
            }
        }
    }
    return s.length;
};
