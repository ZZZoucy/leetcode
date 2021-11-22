// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

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
// 返回右子树的右节点
var rightSideView = function (root) {
    let res = [];
    function dfs(root, depth) {
        if (!root) return;
        // 先访问 当前节点，再递归地访问 右子树 和 左子树。
        // 如果当前节点所在深度还没有出现在res里，说明在该深度下当前节点是第一个被访问的节点，因此将当前节点加入res中。
        if (depth === res.length) {
            res.push(root.val);
        }
        depth++;
        // 先递归右子树，完了之后深度就到下一层了，所以前一层的左子树就永远不会被放进res里
        dfs(root.right, depth);
        dfs(root.left, depth);
    }
    dfs(root, 0); // 从根节点开始访问，根节点深度是0
    return res;
};
