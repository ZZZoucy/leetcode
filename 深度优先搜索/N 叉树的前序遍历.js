// 给定一个 N 叉树，返回其节点值的 前序遍历 。

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    let res = [];
    function dfs(root) {
        if (root === null) return;
        res.push(root.val);
        for (let i = 0; i < root.children.length; i++) {
            dfs(root.children[i]);
        }
    }
    dfs(root);
    return res;
};
