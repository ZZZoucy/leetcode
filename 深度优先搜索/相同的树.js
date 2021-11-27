// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
// 输入：p = [1,2,3], q = [1,2,3]      输出：true
// 输入：p = [1,2], q = [1,null,2]     输出：false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 方法一：深度优先搜索
// 如果两个二叉树都为空，则两个二叉树相同。
// 如果两个二叉树中有且只有一个为空，则两个二叉树一定不相同。
// 如果两个二叉树都不为空，那么首先判断它们的根节点的值是否相同:
// 若不相同则两个二叉树一定不同，
// 若相同，再分别判断两个二叉树的左子树是否相同以及右子树是否相同。
// 这是一个递归的过程，因此可以使用深度优先搜索，递归地判断两个二叉树是否相同。

var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else if (p.val !== q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};
