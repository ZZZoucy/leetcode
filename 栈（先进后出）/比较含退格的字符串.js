// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符(# 之前的字母就删除)。
// 如果相等，返回 true ；否则，返回 false 。
// 注意：如果对空文本输入退格字符，文本继续为空。
// 输入：s = "ab#c", t = "ad#c"        输出：true      解释：s 和 t 都会变成 “ac”。
// 输入：s = "ab##", t = "c#d#"        输出：true      解释：s 和 t 都会变成 “”。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let stack1 = [];
    let stack2 = [];
    for (let ch of s) {
        if (ch !== "#") {
            stack1.push(ch);
        } else {
            stack1.pop();
        }
    }
    for (let ch of t) {
        if (ch !== "#") {
            stack2.push(ch);
        } else {
            stack2.pop();
        }
    }
    return stack1.join() === stack2.join();
};
