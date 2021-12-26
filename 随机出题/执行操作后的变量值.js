// 存在一种仅支持 4 种操作和 1 个变量 X 的编程语言：
// ++X 和 X++ 使变量 X 的值 加 1
// --X 和 X-- 使变量 X 的值 减 1
// 最初，X 的值是 0
// 输入：operations = ["--X","X++","X++"]      输出：1

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let ans = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "--X" || operations[i] === "X--") {
            ans -= 1;
        } else {
            ans += 1;
        }
    }
    return ans;
};
