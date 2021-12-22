// 给你一个二进制字符串 s ，该字符串 不含前导零 。
// 如果 s 包含 零个或一个由连续的 '1' 组成的字段 ，返回 true​​​ 。否则，返回 false 。
// 输入：s = "1001"        输出：false
// 输入：s = "110"         输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; ) {
        // 如果有0或1个连续'1'，s[i] === '1' 符合条件的必然只有 0 次 或 1 次
        if (s[i] === "1") {
            res++;
        }
        while (s[i] === "1" && s[i + 1] === "1") {
            i++;
        }
        i++;
    }
    return res <= 1;
};
