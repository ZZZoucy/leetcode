// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
//          输入：
//           3
//          / \
//         9  20
//        /     \
//       15      7
// 输出：[3, 14.5, 11]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 广度优先搜索（BFS）
var averageOfLevels = function (root) {
    if (root === null) {
        return [];
    }
    let result = [];
    let queue = [root];

    while (queue.length) {
        // 设置下一层
        let nextRoot = [];
        // 设置当前层的总和
        let queueSum = 0;
        // 遍历当前层
        for (let i = 0; i < queue.length; i++) {
            // 统计当前层的总和
            queueSum += queue[i].val;
            // 如果存在左子树
            if (queue[i].left) {
                nextRoot.push(queue[i].left);
            }
            // 如果存在右子树
            if (queue[i].right) {
                nextRoot.push(queue[i].right);
            }
        }
        result.push(queueSum / queue.length); // 平均值 = 总和 / 数组长度
        queue = nextRoot; // 交接
    }
    return result;
};
