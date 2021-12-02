// 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。
// 给定二叉树 [3,9,20,null,null,15,7]
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root === null) {
        return true;
    } else {
        return Math.abs(height(root.right) - height(root.left)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }
};
// 计算子树高度的函数 height
var height = function (root) {
    if (root === null) {
        return 0;
    } else {
        return Math.max(height(root.left), height(root.right)) + 1;
    }
};
