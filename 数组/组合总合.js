// 回溯   组合
// 无序 有 startIndex，无 used

//给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。
// candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。
// 输入: candidates = [2,3,6,7], target = 7
// 输出: [[7],[2,2,3]]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [],
        path = [];
    candidates.sort(); // 排序
    backtracking(0, 0);
    return res;
    function backtracking(startIndex, sum) {
        if (sum > target) return;
        if (sum === target) {
            res.push(Array.from(path));
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            const n = candidates[i];
            if (n > target - sum) continue;
            path.push(n);
            sum += n;
            backtracking(i, sum);
            path.pop();
            sum -= n;
        }
    }
};
