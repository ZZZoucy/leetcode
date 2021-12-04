// 给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母。
// 在比较时，字母是依序循环出现的。举个例子：
// 如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a'
// 输入: letters = ["c", "f", "j"]   target = "a"        输出: "c"
// 输入: letters = ["c", "f", "j"]   target = "c"        输出: "f"

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let left = 0;
    let right = letters.length - 1;
    // 考虑如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a' 的情况
    if (letters[right] <= target) {
        return letters[0];
    }
    // 直到 [left,right] 区间的左右相等
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    // [left,right] 区间的左右相等
    return letters[left];
};
