// 给定一个长度为 n 的数组，请你编写一个函数，返回该数组排序后的结果。
// 输入：[5,2,3,1,4]    输出：[1,2,3,4,5]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort(arr) {
    // write code here
    return arr.sort((a, b) => a - b);
}
module.exports = {
    MySort: MySort,
};
