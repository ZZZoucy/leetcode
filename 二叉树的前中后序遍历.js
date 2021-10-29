// 输入：[5,4,1,2,6,7,8]
// 前序遍历（中左右）：[5,4,1,2,6,7,8]
// 中序遍历（左中右）：[1,4,2,5,7,6,8]
// 后序遍历（左右中）：[1,2,4,7,8,6,5]
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

// 前序遍历（中左右）
var preorderTraversal = function (root, res = []) {
    if (!root) return res;
    res.push(root.val);
    preorderTraversal(root.left, res);
    preorderTraversal(root.right, res);
    return res;
};

// 中序遍历（左中右）
var inorderTraversal = function (root, res = []) {
    if (!root) return res;
    inorderTraversal(root.left, res);
    res.push(root.val);
    inorderTraversal(root.right, res);
    return res;
};

// 后序遍历（左右中）
var nextorderTraversal = function (root, res = []) {
    if (!root) return res;
    nextorderTraversal(root.left, res);
    nextorderTraversal(root.right, res);
    res.push(root.val);
    return res;
};
