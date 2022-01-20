// 我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。
// 给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。
// 然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友
// 输入：candies = 7, num_people = 4
// 输出：[1, 2, 3, 1]
// 输入：candies = 10, num_people = 3
// 输出：[5,2,3]

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let result = new Array(num_people).fill(0);
    let surplus = candies;
    let j = 0;
    for (let i = 1; i < candies; i++) {
        if (surplus > i) {
            result[j] += i;
            surplus -= i;
            j++;
            if (j === num_people) {
                j = 0;
            }
        } else {
            result[j] = result[j] + surplus;
            break;
        }
    }
    return result;
};
