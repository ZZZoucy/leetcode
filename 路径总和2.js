// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]

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
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function (root, targetSum) {
    //递归方法
    let respath = [],
        curpath = [];
    // 确定递归函数参数
    // count是 targetSum-某个节点的 差值
    const traveltree = function (node, count) {
        curpath.push(node.val);
        count -= node.val;
        if (node.left === null && node.right === null && count === 0) {
            respath.push([...curpath]);
        }
        node.left && traveltree(node.left, count);
        node.right && traveltree(node.right, count);
        let cur = curpath.pop();
        count -= cur;
    };
    if (root === null) {
        return respath;
    }
    traveltree(root, targetSum);
    return respath;
};
