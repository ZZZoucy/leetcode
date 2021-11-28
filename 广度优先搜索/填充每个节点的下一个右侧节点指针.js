// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
// struct Node {
//     int val;
//     Node *left;
//     Node *right;
//     Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

// 输入：root = [1,2,3,4,5,6,7]
// 输出：[1,#,2,3,#,4,5,6,7,#]

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root === null) return root;
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            // node 是队列里头部弹出的，指当前节点
            let node = queue.shift();
            if (i < len - 1) {
                // 当前节点的下一个节点指向 queue[0]，queue[0] 是当前节点的同一行的右节点
                node.next = queue[0];
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root;
};
