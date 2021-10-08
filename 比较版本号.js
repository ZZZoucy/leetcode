// 给你两个版本号 version1 和 version2 ，请你比较它们。
// 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1，除此之外返回 0
// 比较修订号时，只需比较 忽略任何前导零后的整数值
// 输入：version1 = "1.01", version2 = "1.001"
// 输出：0

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// 将版本号按照点号分割成修订号(["1","0"])，然后从左到右比较两个版本号的相同下标的修订号
// 在比较修订号时，需要将字符串转换成整数进行比较
// 如果版本号不存在某个下标处的修订号，则该修订号视为 0

var compareVersion = function (version1, version2) {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
    for (let i = 0; i < v1.length || i < v2.length; i++) {
        let x = 0,
            y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
    }
    return 0;
};
