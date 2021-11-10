// 双指针

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。
// 输入: "A man, a plan, a canal: Panama"       输出: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let s1 = s.toLowerCase();
    let l = 0;
    let r = s1.length - 1;
    while (l < r) {
        if (isNumOrZm(s1[l])) {
            if (isNumOrZm(s1[r])) {
                if (s1[l] !== s1[r]) {
                    return false;
                } else {
                    l++;
                    r--;
                }
            } else {
                r--;
            }
        } else {
            l++;
        }
    }
    return true;
};

var isNumOrZm = function (char) {
    if (char == " ") return false;
    else if (!isNaN(char)) return true;
    else if (char >= "a" && char <= "z") return true;
    return false;
};
