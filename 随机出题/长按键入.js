// 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
// 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
// 输入：name = "alex", typed = "aaleex"           输出：true
// 输入：name = "saeed", typed = "ssaaedd"         输出：false
// 输入：name = "laiden", typed = "laiden"         输出：true

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    const n = name.length;
    const m = typed.length;
    let i = 0;
    let j = 0;
    while (j < m) {
        if (i < n && name[i] === typed[j]) {
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false;
        }
    }
    return i === n;
};
