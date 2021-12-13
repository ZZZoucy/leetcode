// 有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。
// 输入：s = "(()())(())"              输出："()()()"
// 输入：s = "(()())(())(()(()))"      输出："()()()()(())"
// 输入：s = "()()"                    输出：""

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    // 遇到左括号计数+1，遇到右括号计数-1
    // 如果遇到左括号时，当前计数大于0，则有效；如果遇到右括号时，当前计数大于1，则有效
    let count = 0,
        ans = "";
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "(" && count++ > 0) ans += "(";
        if (S[i] === ")" && count-- > 1) ans += ")";
    }
    return ans;
};
