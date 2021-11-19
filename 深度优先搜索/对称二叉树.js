// 给定一个二叉树，检查它是否是镜像对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//      1                                                1
//     / \                                              / \
//    2   2                                            2   2
//   / \ / \                                            \   \
//  3  4 4  3                                            3   3

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
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false
    const compareNode = function (left, right) {
        //2. 确定终止条件 空的情况
        if ((left === null && right !== null) || (left !== null && right === null)) {
            return false;
        } else if (left === null && right === null) {
            return true;
        } else if (left.val !== right.val) {
            return false;
        }
        //3. 确定单层递归逻辑
        return compareNode(left.left, right.right) && compareNode(left.right, right.left);
    };
    return compareNode(root.left, root.right);
};
