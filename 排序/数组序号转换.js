// 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。序号代表了一个元素有多大。序号编号的规则如下：
// 序号从 1 开始编号。
// 一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
// 每个数字的序号都应该尽可能地小。
// 输入：arr = [40,10,20,30]         输出：[4,1,2,3]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let res = [];
    let hash = new Map();
    // 去重，不改变原数组
    let arr2 = Array.from(new Set(arr));
    // 排序，不改变原数组
    arr2.sort((a, b) => a - b);

    // 将去重排序后的数组拷贝到 hash 里，值从 1 开始
    let index = 1;
    for (let ele of arr2) {
        hash.set(ele, index);
        index++;
    }
    // 遍历原数组，将每个元素在 hash 中的值取出
    for (let i = 0; i < arr.length; i++) {
        res[i] = hash.get(arr[i]);
    }
    return res;
};
