// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 给定二叉树 [3,9,20,null,null,15,7]，
//      3
//     / \
//    9  20
//    /   \
//   15    7

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
 * @return {number}
 */

// 广度优先搜索
var maxDepth = function (root) {
    if (root == null) return 0;
    const queue = [root];
    let depth = 1;
    while (queue.length) {
        // 当前层的节点个数
        const len = queue.length;
        // 逐个让当前层的节点出列
        for (let i = 0; i < len; i++) {
            // 当前出列的节点
            const cur = queue.shift();
            // 将cur的相邻节点加入队列
            if (cur.left != null) {
                queue.push(cur.left);
            }
            if (cur.right != null) {
                queue.push(cur.right);
            }
        }
        // 当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
        if (queue.length) depth++;
    }
    return depth;
};
