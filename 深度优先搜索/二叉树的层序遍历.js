// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
// 二叉树：[3,9,20,null,null,15,7],
// 返回其层序遍历结果：
// [
//     [3],
//     [9,20],
//     [15,7]
// ]

/**  二叉树的定义 稍微记一下
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
    //二叉树的层序遍历
    let res = [],
        queue = [];
    queue.push(root);
    if (root === null) {
        return res;
    }
    while (queue.length !== 0) {
        // 记录当前层级节点数
        let length = queue.length;
        //存放每一层的节点
        let curLevel = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    return res;
};
