// 给你两个长度相同的整数数组 target 和 arr 。
// 每一步中，你可以选择 arr 的任意 非空子数组 并将它翻转。你可以执行此过程任意次。
// 如果你能让 arr 变得与 target 相同，返回 True；否则，返回 False 。
// 输入：target = [1,2,3,4], arr = [2,4,1,3]       输出：true
// 输入：target = [7], arr = [7]                   输出：true

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    if (target.join("") !== arr.join("")) return false;
    return true;
};
