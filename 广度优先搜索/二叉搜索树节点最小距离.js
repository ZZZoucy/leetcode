// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
// 差值是一个正数，其数值等于两值之差的绝对值。
// 输入：root = [4,2,6,1,3]    输出：1

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
var minDiffInBST = function (root) {
    let arr = [];
    // 二叉树中序遍历 -> 有序数组
    const buildArr = (root) => {
        if (root) {
            buildArr(root.left);
            arr.push(root.val);
            buildArr(root.right);
        }
    };
    buildArr(root);
    let diff = arr[arr.length - 1];
    // 遍历有序数组，求两个位置的最小差值
    for (let i = 1; i < arr.length; ++i) {
        if (diff > arr[i] - arr[i - 1]) diff = arr[i] - arr[i - 1];
    }
    return diff;
};
