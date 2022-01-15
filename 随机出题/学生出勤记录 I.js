// 给你一个字符串 s 表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
//     'A'：Absent，缺勤
//     'L'：Late，迟到
//     'P'：Present，到场
// 如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：
// 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
// 学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
// 如果学生可以获得出勤奖励，返回 true ；否则，返回 false 。
// 输入：s = "PPALLP"      输出：true
// 输入：s = "PPALLL"      输出：false
// 输入：s = "AA"          输出：false

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let countA = 0;
    let countL = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            countA += 1;
        }
        if (s[i] === "L") {
            if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") {
                countL = 0;
            }
        }
    }
    return countA < 2 && countL === 1;
};
