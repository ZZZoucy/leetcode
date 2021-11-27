// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
// 如何同时遍历两个二叉树呢？其实和遍历一个树逻辑是一样的，只不过传入两个树的节点，同时操作。
// 输入:    Tree 1                     Tree 2
//            1                          2
//           / \                        / \
//          3   2                      1   3
//         /                            \   \
//        5                              4   7

// 输出: 合并后的树:
//          3
//         / \
//        4   5
//       / \   \
//       5   4   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    // 前序遍历
    const preOrder = (root1, root2) => {
        // 直接操作 root1
        // root1、root2 哪边为空，就把另一树的子树覆盖到 root1 上
        if (!root1) return root2;
        if (!root2) return root1;
        // 如果都不为空，那么就把 root1、root2 这个位置上的节点值相加
        root1.val += root2.val;
        root1.left = preOrder(root1.left, root2.left);
        root1.right = preOrder(root1.right, root2.right);
        return root1;
    };
    return preOrder(root1, root2);
};
