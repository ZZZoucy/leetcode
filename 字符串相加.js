// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回，不能用bigint之类的
// 输入：num1 = "11", num2 = "123"
// 输出："134"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 算法流程： 设定 i，j 两指针分别指向 num1，num2 尾部，模拟人工加法；
// 计算进位： 计算 carry = tmp / 10，代表当前位相加是否产生进位；
// 添加当前位： 计算 tmp = n1 + n2 + carry，并将当前位 tmp % 10 添加至 res 头部；
// 索引溢出处理： 当指针 i或j 走过数字首部后，给 n1，n2 赋值为 00，相当于给 num1，num2 中长度较短的数字前面填 00，以便后续计算。
// 当遍历完 num1，num2 后跳出循环，并根据 carry 值决定是否在头部添加进位 11，最终返回 res 即可。

var addStrings = function (num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        carry = 0;
    const res = [];
    while (i >= 0 || j >= 0 || carry != 0) {
        const x = i >= 0 ? num1.charAt(i) - "0" : 0;
        const y = j >= 0 ? num2.charAt(j) - "0" : 0;
        const result = x + y + carry;
        res.push(result % 10);
        carry = Math.floor(result / 10);
        i -= 1;
        j -= 1;
    }
    return res.reverse().join("");
};
