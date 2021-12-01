// 给定一棵二叉树，你需要计算它的直径长度。
// 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
// 输入：    1
//         / \
//        2   3
//       / \
//      4   5
// 输出：3

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

// 求树高度的函数height，每次把节点当作参数传进去，从而求出该节点向下的高度
// 求以某个点为顶点，两边树高和 + 1（加的是顶点）
// 递归遍历这棵树，求以每一个节点为顶点的直径长度，每次总返回最大的那个路径
// 最终返回最大直径长度

var diameterOfBinaryTree = function (root) {
    if (root === null) return 0;
    let tempH = height(root.left) + height(root.right);
    return Math.max(tempH, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
    // 计算高度的函数
    function height(node) {
        if (node === null) return 0;
        return Math.max(height(node.left), height(node.right)) + 1;
    }
};
