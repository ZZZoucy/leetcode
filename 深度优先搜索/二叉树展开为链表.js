// 给你二叉树的根结点 root ，请你将它展开为一个单链表：
// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 将二叉树展开为单链表之后，单链表中的节点顺序即为二叉树的前序遍历访问各节点的顺序。
var flatten = function (root) {
    const res = [];
    preorderTraversal(root, res);
    for (let i = 1; i < res.length; i++) {
        // 前序遍历结束之后更新每个节点的左右子节点的信息，将二叉树展开为单链表
        const prev = res[i - 1];
        const cur = res[i];
        prev.left = null;
        prev.right = cur;
    }
    // 前序遍历，获得各节点被访问到的顺序
    const preorderTraversal = (root, res) => {
        if (root !== null) {
            res.push(root);
            preorderTraversal(root.left, res);
            preorderTraversal(root.right, res);
        }
    };
};
