// 给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。
// 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

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
 * @return {TreeNode}
 */

var increasingBST = function (root) {
    const res = [];
    inorder(root, res);

    let newnode = new TreeNode(res[0]);
    let cur = newnode;
    //循环生成树形结构
    for (let i = 1; i < res.length; i++) {
        let child = new TreeNode(res[i]);
        cur.right = child;
        cur = cur.right;
    }
    return newnode;
};

const inorder = (node, res) => {
    if (!node) {
        return;
    }
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
};
