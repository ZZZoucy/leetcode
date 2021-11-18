// 翻转一棵二叉树。
// 把除根节点外的其他节点左右翻转
// [4,2,1,3,7,6,9]
// [4,7,9,6,2,3,1]

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

var invertTree = function (root) {
    //1. 首先使用递归版本的前序遍历实现二叉树翻转
    //交换节点函数
    const inverNode = function (left, right) {
        let temp = left;
        left = right;
        right = temp;
        //需要重新给root赋值一下
        root.left = left;
        root.right = right;
    };
    //确定递归函数的参数和返回值inverTree=function(root)
    //确定终止条件
    if (root === null) {
        return root;
    }
    //确定节点处理逻辑 交换
    inverNode(root.left, root.right);
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
