// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
// 差值是一个正数，其数值等于两值之差的绝对值。
// 输入：root = [4,2,6,1,3]       输出：1

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
var getMinimumDifference = function (root) {
    let res = [];
    // 先中序遍历，就成了一个有序数组
    const buildArr = (root) => {
        if (root) {
            buildArr(root.left);
            res.push(root.val);
            buildArr(root.right);
        }
    };
    buildArr(root);
    // 遍历有序数组，找到最小差值
    let minDiff = res[res.length - 1];
    for (let i = 1; i < res.length; i++) {
        if (minDiff > res[i] - res[i - 1]) minDiff = res[i] - res[i - 1];
    }
    return minDiff;
};
