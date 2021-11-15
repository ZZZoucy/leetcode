// 哈希表

// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
// s = "leetcode"        返回 0
// s = "loveleetcode"    返回 2

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let hash = new Set();
    // 遍历 s，如果元素在 hash 表中，就等于 2
    // 如果元素不在 hash 表中，就等于 1
    // 遍历完后，如果等于 1 就代表该字符没有重复
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] === undefined ? 1 : 2;
    }
    // 如果 hash 表中有等于 1 的元素，就返回该元素在 s 中的下标
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) {
            return i;
        }
    }
    // 如果 hash 表中没有等于 1 的元素，就返回 -1
    return -1;
};
