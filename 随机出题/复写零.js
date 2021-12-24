// 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
// 注意：请不要在超过该数组长度的位置写入元素。
// 要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
// 输入：[1,0,2,3,0,4,5,0]     输出：[1,0,0,2,3,0,0,4]

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let i = 0;
    let len = arr.length;
    while (i <= arr.length - 1) {
        if (!arr[i]) {
            arr.splice(i, 0, 0);
            i++;
        }
        i++;
    }
    arr.splice(len, arr.length - 1);
};
