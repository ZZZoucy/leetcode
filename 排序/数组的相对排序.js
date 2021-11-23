// 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
// 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// 输出：[2,2,2,1,4,3,3,9,6,7,19]

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    // 先对 arr1 进行升序排序
    arr1.sort((a, b) => a - b);
    // 从 arr2 的尾巴开始向前遍历
    for (let i = arr2.length; i >= 0; i--) {
        for (let j = 0; j < arr1.length; j++) {
            // 如果遇到相同元素，就把它放到 arr1 的头部
            if (arr2[i] === arr1[j]) {
                arr1.unshift(arr1.splice(j, 1));
            }
        }
    }
    return arr1;
};
