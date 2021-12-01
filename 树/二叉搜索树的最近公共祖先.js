// 定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
// 输入：           6
//              /     \
//             2       8
//            / \     / \
//           0   4   7   9
//              / \
//             3   5

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// 输出: 6
// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// 输出: 2

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // 二叉树，左子树小于根节点，右子树大于根节点
    while (root) {
        // 如果 p 和 q 的值都小于根节点的值，说明在左子树里
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
            // 如果 p 和 q 的值都大于根节点的值，说明在右子树里
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right;
            // 如果 p 和 q 的值一个大于一个小于根节点的值，说明在该根节点就是了
        } else {
            break;
        }
    }
    return root;
};
