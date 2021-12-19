// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。
// 输入：x = 123       输出：321
// 输入：x = -123      输出：-321
// 输入：x = 120       输出：21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = 0;
    while (x) {
        res = res * 10 + (x % 10);
        // console.log('res',res)
        // 判断越界
        if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
        // Math.trunc() 取整
        x = Math.trunc(x / 10);
        // console.log('x',x)
    }
    return res;
};

// 强行反转
/*
var reverse = function (x) {
    // split 以什么来分割数组，reverse 进行翻转，再通过 join 整成字符串，再转化成数字
    // parseInt 不会转化-号，因此只会取数字部分
    let res = parseInt(x.toString().split("").reverse().join(""));
    if (x < 0) res = -res;
    // 判断越界
    return res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31) ? 0 : res;
};
*/
