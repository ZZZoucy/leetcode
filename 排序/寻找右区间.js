// 给你一个区间数组 intervals ，其中 intervals[i] = [starti, endi] ，且每个 starti 都 不同 。
// 返回一个由每个区间 i 的 右侧区间 的最小起始位置组成的数组。如果某个区间 i 不存在对应的 右侧区间 ，则下标 i 处的值设为 -1 。
// 输入：intervals = [[1,2]]                 输出：[-1]
// 输入：intervals = [[3,4],[2,3],[1,2]]     输出：[-1, 0, 1]

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    // 建立 hash 表，把 intervals 中每一个元素数组的 左边界 放进 hash 里，值为元素下标
    // Map(3) { 3 => 0, 1 => 1, 2 => 2 }
    let hash = new Map();
    for (let i = 0; i < intervals.length; i++) {
        if (hash.has(intervals[i][0]) === false) {
            hash.set(intervals[i][0], i);
        }
    }
    // 对 hash 表进行排序，arr = [ [ 1, 1 ], [ 2, 2 ], [ 3, 0 ] ]
    let arr = [...hash].sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (intervals[i][1] <= arr[j][0]) {
                res.push(arr[j][1]);
                break;
            }
        }
        if (res.length !== i + 1) {
            res.push(-1);
        }
    }
    return res;
};
