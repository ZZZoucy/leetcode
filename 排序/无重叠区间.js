// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
// 可以认为区间的终点总是大于它的起点。
// 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
// 输入: [ [1,2], [2,3], [3,4], [1,3] ]       输出: 1
// 输入: [ [1,2], [1,2], [1,2] ]              输出: 2

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // 按照左边界升序排列
    intervals.sort((a, b) => a[0] - b[0]);
    let count = 1;
    let end = intervals[intervals.length - 1][0];
    // 倒序遍历，对单个区间来说，左边界越大越好，因为给前面区间的空间越大
    for (let i = intervals.length - 2; i >= 0; i--) {
        if (intervals[i][1] <= end) {
            count++;
            end = intervals[i][0];
        }
    }
    // count 记录的是最大非重复区间的个数
    return intervals.length - count;
};
