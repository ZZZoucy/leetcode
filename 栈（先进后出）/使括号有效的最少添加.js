// 给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。
// 输入："())"              输出：1
// 输入："((("              输出：3
// 输入："()))(("           输出：4

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let count = 0;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
        } else if (s[i] === ")" && stack.length) {
            stack.pop();
        } else {
            count++;
        }
    }
    return stack.length + count;
};
