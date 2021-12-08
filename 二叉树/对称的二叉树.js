// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//                    1
//                   / \
//                  2   2
//                 / \ / \
//                3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//                    1
//                   / \
//                  2   2
//                   \   \
//                   3    3

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
var isSymmetric = function (root) {
    if (!root) return true;
    function dfs(left, right) {
        // 如果左右都为空，就是 true
        if (!left && !right) return true;
        // 如果一个为空另一个不为空，就是 false
        if (!left || !right) return false;
        // 如果左右不全等，就是 false
        if (left.val !== right.val) return false;
        // 递归
        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    return dfs(root.left, root.right);
};
