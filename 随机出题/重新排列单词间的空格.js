// 给你一个字符串 text ，该字符串由若干被空格包围的单词组成。
// 请你重新排列空格，使每对相邻单词之间的空格数目都 相等 ，并尽可能 最大化 该数目。
// 如果不能重新平均分配所有空格，请 将多余的空格放置在字符串末尾。
// 输入：text = "  this   is  a sentence "         输出："this   is   a   sentence"
// 输入：text = " practice   makes   perfect"      输出："practice   makes   perfect "

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let len = text.length;
    let wordNum = 0,
        bsNum = 0,
        i = 0;
    // wordsArray 存储所有单词的数组
    let wordsArray = [];
    while (i < len) {
        // temp 存储单个单词
        let temp = [];
        // 统计 bsNum 空格数量
        while (i < len && text[i] === " ") {
            bsNum++;
            i++;
        }
        // 如果不是空格，而是字母，就 push 到 temp 中，当碰到空格就说明一个单词结束了
        while (i < len && text[i] !== " ") {
            temp.push(text[i]);
            i++;
        }
        // temp 不为空，说明有单词，那就放到 wordsArray 中
        if (temp.length !== 0) {
            wordsArray[wordNum] = temp;
            wordNum++;
        }
    }

    // 每个单词中间的空格数
    let mid_num = 0;
    // 多余空格放到末尾
    let right_num = bsNum;
    // 如果单词数量大于1，就计算 中间空格数和多余空格数量
    if (wordNum > 1) {
        mid_num = Math.floor(bsNum / (wordNum - 1));
        right_num = bsNum % (wordNum - 1);
    }
    // console.log(mid_num, right_num)
    // 空格数都计算完毕后，进行新的数组组合
    let res = [];
    let resIndex = 0;
    for (let i = 0; i < wordNum; i++) {
        for (let j = 0; j < wordsArray[i].length; j++) {
            res[resIndex] = wordsArray[i][j];
            resIndex++;
        }
        if (i !== wordNum - 1) {
            for (let j = 0; j < mid_num; j++) {
                res[resIndex] = wordsArray[i][j] = " ";
                resIndex++;
            }
        } else {
            for (let j = 0; j < right_num; j++) {
                res[resIndex] = wordsArray[i][j] = " ";
                resIndex++;
            }
        }
    }
    return res.join("");
};
