// 计算给定二叉树的所有左叶子之和。
//           3
//          / \
//         9  20
//        /     \
//       15      7
// 输出：24

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
var sumOfLeftLeaves = function (root) {
    // 后序遍历、递归遍历
    function nodesSum(node) {
        // 终止条件
        if (!node) return 0;
        // 左右
        let leftValue = sumOfLeftLeaves(node.left);
        let rightValue = sumOfLeftLeaves(node.right);
        // 中
        let minValue = 0;
        // 如果节点的左子树存在，但是左子树下的左右子树都不存在，说明已经到了叶子结点
        if (node.left && node.left.right === null && node.left.left === null) {
            minValue = node.left.val;
        }
        let sum = leftValue + rightValue + minValue;
        return sum;
    }
    return nodesSum(root);
};
