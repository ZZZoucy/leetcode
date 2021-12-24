// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
// 输入: "abab"        输出: True
// 输入: "aba"         输出: False

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    if (s.length === 0) return false;
    // KMP 算法的 next 数组
    const getNext = (s) => {
        let next = [];
        let j = -1;
        next.push(j);
        for (let i = 1; i < s.length; ++i) {
            while (j >= 0 && s[i] !== s[j + 1]) j = next[j];
            if (s[i] === s[j + 1]) j++;
            next.push(j);
        }
        return next;
    };
    // 获取 s 的 next 数组
    let next = getNext(s);
    if (next[next.length - 1] !== -1 && s.length % (s.length - (next[next.length - 1] + 1)) === 0) return true;
    return false;
};
