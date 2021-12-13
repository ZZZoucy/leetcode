// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。

// 输入：s = "()"             输出：true
// 输入：s = "()[]{}"         输出：true
// 输入：s = "(]"             输出：false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let len = s.length;
    // 如果 s 个数为奇数，那一定不会闭合
    if (len % 2 === 1) return false;

    // hash = Map(3) { ')' => '(', '}' => '{', ']' => '[' }
    let hash = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);

    let stack = [];
    // 遍历 s，判断是否在 hash 中
    for (let ch of s) {
        // 如果在 hash 中，说明左括号已经全部放到了 stack 中
        if (hash.has(ch)) {
            // 如果 stack 为空，说明没有左括号，那出现右括号的话必然无法闭合
            // 如果 stack 的最后一个左括号与 hash 中有括号对应的左括号不相同，那也代表不能闭合
            if (!stack.length || stack[stack.length - 1] !== hash.get(ch)) {
                return false;
            }
            // 如果可以闭合，就将其弹出
            stack.pop();
        }
        // 如果不在 hash 中，说明是左括号，把它加到 stack 中
        else {
            stack.push(ch);
        }
    }
    return !stack.length;
};
