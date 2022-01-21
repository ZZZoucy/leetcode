// 给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。
// 输入：s = "?zs"
// 输出："azs"
// 解释：该示例共有 25 种解决方案，从 "azs" 到 "yzs" 都是符合题目要求的。只有 "z" 是无效的修改，因为字符串 "zzs" 中有连续重复的两个 'z' 。

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    // 给定三个字母，判断 ？前后的字母是否属于这三个中的一个或两个，选择没有出现的另外一个字母来替换 ？即可
    const strArr = ["a", "b", "c"];
    const n = s.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        let str = s[i];
        // 如果 s[i] 是 ？
        if (str === "?") {
            // 判断前后字母是否是 a,b,c 中的一个或两个
            const before = result[i - 1];
            const after = s[i + 1];

            if (after !== "a" && before !== "a") {
                str = strArr[0];
            } else if (after !== "b" && before !== "b") {
                str = strArr[1];
            } else {
                str = strArr[2];
            }
        }

        result.push(str);
    }
    return result.join("");
};
