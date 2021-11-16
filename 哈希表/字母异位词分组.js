// 哈希表

// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let len = strs.length;
    let hash = new Map();
    // 遍历 strs
    for (let i = 0; i < len; i++) {
        // 把每一个元素转为数组进行 map，将元素中的字母进行排序，再转为字符串
        let asc = strs[i].split("").sort().join();
        // 如果排序后的 asc 存在于 hash 中，说明是有 字母异位词 了，只需要把该 strs[i] 插入 asc 中
        // 如果不存在，那就新增一个 asc，只为该 strs[i]
        if (hash.has(asc)) {
            hash.get(asc).push(strs[i]);
        } else {
            hash.set(asc, [strs[i]]);
        }
    }
    // 最后返回的是 hash 的值
    return Array.from(hash.values());
};
