// 稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。
// 输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
// 输出：-1
// 输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
// 输出：4

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
    let left = 0;
    let right = words.length - 1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;

        // 排除掉是空字符串的区域
        while (mid > left && words[mid] === "") mid--;

        if (words[mid] > s) {
            right = mid - 1;
        } else if (words[mid] < s) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};
