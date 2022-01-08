// 自除数 是指可以被它包含的每一位数除尽的数。
// 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
// 还有，自除数不允许包含 0 。
// 输入： 上边界left = 1, 下边界right = 22
// 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = [];
    for (let i = left; i <= right; i++) {
        let len = 0;
        let temp = String(i);
        for (let k = 0; k < temp.length; k++) {
            if (parseInt(i) % parseInt(temp[k]) == 0) len++;
        }
        if (len == temp.length) result.push(i);
    }
    return result;
};
