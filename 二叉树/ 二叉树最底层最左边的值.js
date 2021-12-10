// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。假设二叉树中至少有一个节点。
// 输入: root = [2, 1, 3]                            输出: 1
// 输入: [1, 2, 3, 4, null, 5, 6, null, null, 7]     输出: 7

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
var findBottomLeftValue = function (root) {
    let arr = [];
    dfs(root, 0);
    // 把二叉树按层转为数组，取最后一组数组的第一个元素即可
    function dfs(root, n) {
        if (!root) return;
        if (!Array.isArray(arr[n])) arr[n] = [];
        arr[n].push(root.val);
        dfs(root.left, n + 1);
        dfs(root.right, n + 1);
    }
    return arr[arr.length - 1][0];
};
