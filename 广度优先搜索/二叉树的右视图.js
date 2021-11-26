// 广度优先搜索(队列)

// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
// 输入: [1,2,3,null,5,null,4]       输出: [1,3,4]

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
 * @return {number[]}
 */
// 返回右子树的右节点
var rightSideView = function (root) {
    // 二叉树右视图 只需要把每一层最后一个节点存储到res数组
    let res = [],
        queue = [];
    queue.push(root);
    while (queue.length && root !== null) {
        // 记录当前层级节点个数
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            // length长度为0的时候表明到了层级最后一个节点
            if (!length) {
                res.push(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return res;
};
