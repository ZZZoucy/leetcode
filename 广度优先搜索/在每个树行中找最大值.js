// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
// 输入: root = [1,3,2,5,3,null,9]         输出: [1,3,9]
//          解释:
//           1
//          / \
//         3   2
//        / \   \
//       5   3   9

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
var largestValues = function (root) {
    // 使用层序遍历
    let res = [];
    let queue = [root];
    while (root !== null && queue.length) {
        // 设置max初始值就是队列的第一个元素
        let max = queue[0].val;
        let len = queue.length;
        // 遍历每一层
        while (len--) {
            let node = queue.shift();
            max = max > node.val ? max : node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // 把每一层的最大值放到res数组
        res.push(max);
    }
    return res;
};
