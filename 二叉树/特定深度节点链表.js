// // 给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。
// 输入：[1,2,3,4,5,null,7,8]
//         1
//        /  \
//       2    3
//      / \    \
//     4   5    7
//    /
//   8
// 输出：[[1],[2,3],[4,5,7],[8]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
    if (!tree) return [];
    let queue = [tree];
    let res = [];
    while (queue.length) {
        let len = queue.length;
        let head = new ListNode(0);
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            let linkNode = new ListNode(node.val);
            let tempNext = head.next;
            head.next = linkNode;
            linkNode.next = tempNext;
            // 先遍历右边的节点
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }
        res.push(head.next);
    }
    return res;
};
