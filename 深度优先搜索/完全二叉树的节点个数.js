// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

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
var countNodes = function (root) {
    //递归法计算二叉树节点数
    // 1. 确定递归函数参数
    const dfs = (node) => {
        //2. 确定终止条件
        if (node === null) {
            return 0;
        }
        //3. 确定单层递归逻辑
        return dfs(node.left) + dfs(node.right) + 1;
    };
    return dfs(root);
};
