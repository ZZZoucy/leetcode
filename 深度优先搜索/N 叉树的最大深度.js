// 给定一个 N 叉树，找到其最大深度。
// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
//            1
//          / | \
//         3  2  4
//        / \
//       5   6

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    let max = 0;
    for (let i = 0; i < root.children.length; i++) {
        max = Math.max(max, maxDepth(root.children[i]));
    }
    return 1 + max;
};
