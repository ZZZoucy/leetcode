// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 输入：root = [3,9,20,null,null,15,7]              输出：2
// 输入：root = [2,null,3,null,4,null,5,null,6]      输出：5

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

// 广度优先搜索
// 起点是root根节点，终点是最靠近根节点的那个叶子节点
// BFS常用的场景就是让你在一幅图是找到从起点start到终点end的最近距离
// 当前这个题目，使用BFS，depth每增加一步，队列中的所有节点都向前进一一步，这个逻辑保证了一旦找到一个终点，走的步数是最少的

var minDepth = function (root) {
    if (root == null) return 0;
    // 根节点入列
    const queue = [root];
    // root本身就是一层，将depth初始化为1
    let depth = 1;
    // 直到清空队列
    while (queue.length) {
        let len = queue.length;
        // 将当前队列中的所有节点向四周扩散
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            // 判断是否到达终点 如果没有孩子，直接返回所在层数
            if (cur.left == null && cur.right == null) {
                return depth;
            }
            // 将cur的相邻节点加入队列
            if (cur.left != null) {
                queue.push(cur.left);
            }
            if (cur.right != null) {
                queue.push(cur.right);
            }
        }
        // 在这里增加步数
        depth++;
    }
    return depth;
};
