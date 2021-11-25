// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
// 输入:"tree"           输出: "eert"
// 输入:"cccaaa"         输出:"cccaaa"

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let hash = new Map();
    for (let char of s) {
        // 遍历 s：如果元素已经在 hash 表中，则取出 值+1，如果不存在就为 0+1
        // 再把 元素 放回，值为刚刚计算的结果
        hash.set(char, (hash.get(char) || 0) + 1);
    }
    // 将 hash 表转为 数组hashArr，再按字母出现次数进行降序排序，hashArr = [ ['e',2], ['t',1], ['r',1] ]
    let hashArr = Array.from(hash);
    hashArr.sort((a, b) => b[1] - a[1]);
    // 遍历 hashArr，按出现次数将字母逐个push到结果集里
    let stringArr = [];
    hashArr.forEach((item) => {
        let n = item[1];
        for (let i = 0; i < n; i++) {
            stringArr.push(item[0]);
        }
    });
    return stringArr.join("");
};
