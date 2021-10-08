// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 输入：s = "()[]{}"      输出：true
// 输入：s = "([)]"        输出：false
/**
 * @param {string} s
 * @return {boolean}
 */

// 三种不匹配的情况：1、({[]}() 左括号多余  2、([{}}} 括号不多余，但是类型不匹配   3、({}))) 右括号多余
// 什么时候说明左括号和右括号全都匹配了呢，就是字符串遍历完之后，栈是空的，就说明全都匹配了
// 技巧，在匹配左括号的时候，右括号先入栈，就只需要比较当前元素和栈顶相不相等就可以了，比左括号先入栈代码实现要简单的多了

var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const stack = [],
        map = {
            "(": ")",
            "{": "}",
            "[": "]",
        };
    for (const x of s) {
        if (x in map) {
            stack.push(x);
            continue;
        }
        if (map[stack.pop()] !== x) return false;
    }
    return !stack.length;
};
