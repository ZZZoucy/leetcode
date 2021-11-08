// 回溯   组合
// 无序 有 startIndex，无 used

// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 输入：n = 4, k = 2
// 输出：[[2,4],[3,4],[2,3],[1,2],[1,3],[1,4],]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = [],
        path = [];
    backtracking(n, k, 1);
    return res;

    function backtracking(n, k, startIndex) {
        if (path.length === k) {
            res.push([...path]);
            return res;
        }

        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            backtracking(n, k, i + 1);
            path.pop();
        }
    }
};
