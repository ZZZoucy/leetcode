// 双指针

// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
// 必须原地修改输入数组、使用 O(1) 的额外空间
// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        [s[i], s[j]] = [s[j], s[i]]; // 对称位置进行交换，传统方式需要借助一个新变量，ES6解构赋值不需要
        i++;
        j--;
    }
    return s;
};
