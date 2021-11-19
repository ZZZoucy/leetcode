// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
    //每一层可能有2个以上,所以不再使用node.left、node.right
    let res = [],
        queue = [];
    queue.push(root);
    while (queue.length && root !== null) {
        //记录每一层节点个数还是和二叉树一致
        let length = queue.length;
        //存放每层节点 也和二叉树一致
        let curLevel = [];
        while (length--) {
            let node = queue.shift();
            curLevel.push(node.val);
            //这里不再是 ndoe.left、node.right 而是循坏node.children
            for (let item of node.children) {
                item && queue.push(item);
            }
        }
        res.push(curLevel);
    }
    return res;
};
