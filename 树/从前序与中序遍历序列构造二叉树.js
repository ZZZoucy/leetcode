// 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null;
    // 从前序遍历的数组中获取中间节点的值，即数组第一个值
    const rootVal = preorder.shift();
    // 获取中间节点在中序遍历中的下标
    const index = inorder.indexOf(rootVal);
    // 创建中间节点
    const root = new TreeNode(rootVal);
    // 创建左节点
    root.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
    // 创建右节点
    root.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
    return root;
};
