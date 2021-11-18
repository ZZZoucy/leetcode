// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
// 输入：root = [3,1,4,null,2], k = 1
// 输出：1

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
 * @param {number} k
 * @return {number}
 */

// 二叉树的中序遍历完就是升序的，所以找第 k 个最小元素，就是第 k-1 个元素
var kthSmallest = function (root, k) {
    const res = [];
    var inorderTraversal = function (root) {
        if (!root) return res;
        inorderTraversal(root.left, res);
        res.push(root.val);
        inorderTraversal(root.right, res);
        return res;
    };
    inorderTraversal(root);
    return res[k - 1];
};
