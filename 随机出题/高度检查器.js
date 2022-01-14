// 排序后的高度情况用整数数组 expected 表示，其中 expected[i] 是预计排在这一行中第 i 位的学生的高度（下标从 0 开始）。
// 给你一个整数数组 heights ，表示 当前学生站位 的高度情况。heights[i] 是这一行中第 i 位学生的高度（下标从 0 开始）。
// 返回满足 heights[i] != expected[i] 的 下标数量 。
// 输入：heights = [1, 1, 4, 2, 1, 3]       输出：3
// 解释：
// 高度：[1,1,4,2,1,3]
// 预期：[1,1,1,2,3,4]
// 下标 2 、4 、5 处的学生高度不匹配。

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    // sort 会改变原数组，所以先复制一个
    let h = new Array(heights.length).fill(0);
    for (let i = 0; i < heights.length; i++) {
        h[i] = heights[i];
    }
    h.sort((a, b) => a - b);
    // 遍历数组，逐个比较，记录不相同的数量
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== h[i]) {
            count += 1;
        }
    }
    return count;
};
