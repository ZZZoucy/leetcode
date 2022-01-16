// 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
// 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    const res = [];
    const n = num.length;
    for (let i = n - 1; i >= 0; i--) {
        let sum = num[i] + (k % 10);
        k = Math.floor(k / 10);
        if (sum >= 10) {
            k++;
            sum -= 10;
        }
        res.push(sum);
    }
    for (; k > 0; k = Math.floor(k / 10)) {
        res.push(k % 10);
    }
    res.reverse();
    return res;
};
