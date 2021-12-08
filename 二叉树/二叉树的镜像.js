// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
// 例如输入：
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    // 从根节点开始，分别递归地对左右子树进行遍历，并从叶子节点先开始翻转得到镜像
    if (root === null) return null;
    let left = mirrorTree(root.left);
    let right = mirrorTree(root.right);
    // 如果当前遍历到的节点 root 的左右两棵子树都已经翻转得到镜像
    // 于是换两棵子树的位置，即可得到以 root 为根节点的整棵子树的镜像
    root.left = right;
    root.right = left;
    return root;
};
