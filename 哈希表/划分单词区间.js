// 第1次循环，哈希表存每个字符最后出现位
// 第2次循环，每字母首次出现位到该字母最后出现位片段结束位在此最短
// 片段中加入新字母最后出现位 > 原字母的最后出现位片段结束位延长到新字母最后出现位
// 循环到片段结束位，将结束位 - 开始位放入结果集。开始位重置为当前位，即结束位

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let hash = {};
    let start = -1,
        e = 0;
    // 结果集
    let res = [];
    // hash 表存每个字符最后出现的位置下标
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = i;
    }
    // 每字母首次出现位到该字母最后出现位，片段结束位在此最短
    for (let i = 0; i < s.length; i++) {
        e = Math.max(e, hash[s[i]]);
        console.log([i, e]);
        if (i === e) {
            res.push(i - start);
            start = i;
        }
    }
    return res;
};
