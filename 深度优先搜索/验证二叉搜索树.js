// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
// 有效 二叉搜索树定义如下：
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 输入：root = [2,1,3]                     输出：true
// 输入：root = [5,1,4,null,null,3,6]       输出：false    解释：根节点的值是 5 ，但是右子节点的值是 4 。

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
 * @return {boolean}
 */
// 不能单纯的比较左节点小于中间节点，右节点大于中间节点就完事了。
// 要比较的是 左子树所有节点小于中间节点，右子树所有节点大于中间节点。
var isValidBST = function (root) {
    // 用来记录前一个节点
    let pre = null;
    const inOrder = (root) => {
        if (root === null) {
            return true;
        }
        let left = inOrder(root.left);

        if (pre !== null && pre.val >= root.val) {
            return false;
        }
        pre = root;

        let right = inOrder(root.right);
        return left && right;
    };
    return inOrder(root);
};
