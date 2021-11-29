// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 首先，我们将列表中的区间按照左端点升序排序。然后我们将第一个区间加入 merged 数组中，并按顺序依次考虑之后的每个区间：
// 如果当前区间的左端点在数组 merged 中最后一个区间的右端点之后，那么它们不会重合，我们可以直接将这个区间加入数组 merged 的末尾；
// 否则，它们重合，我们需要用当前区间的右端点更新数组 merged 中最后一个区间的右端点，将其置为二者的较大值。
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let result = [];
    for (let i = 1; i < intervals.length; i++) {
        // cur 是当前区间，在 prev 后一个
        let cur = intervals[i];
        // 如果后一个的左 > 前一个的右，说明区间不重合
        if (cur[0] > prev[1]) {
            // 所以直接把前一个区间 push 进去即可
            result.push(prev);
            // 然后 prev 右移
            prev = cur;
        } else {
            // 如果如果后一个的左 < 前一个的右，那么右闭合的值是 cur[1], prev[1] 中较大的
            prev[1] = Math.max(cur[1], prev[1]);
        }
    }
    result.push(prev);
    return result;
};
