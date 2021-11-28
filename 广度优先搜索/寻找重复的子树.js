// 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
//              1
//             / \
//            2   3
//           /   / \
//          4   2   4
//             /
//            4
// 输出 : [[2,4],[4]]

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
 * @return {TreeNode[]}
 */

// 用递归，就必须知道以当前节点为根的二叉树长什么样，还需要知道以其他节点为根的二叉树长什么样，才能进行比较
// 要解决以当前节点为根的二叉树长什么样，就需要序列化它的结构
// 要知道以当前节点为根的二叉树长什么样，用后序遍历最是佳的方式
// 要知道以其它节点为根的二叉树长什么样，就得要把序列化二叉树的结构的结果存储起来

var findDuplicateSubtrees = function (root) {
    // 记录所有子树
    const count = new Map();
    const res = [];
    const collect = (node) => {
        // 对于空节点，可以用一个特殊字符表示
        if (!node) {
            return "#";
        }
        // 将左右子树序列化成字符串，左右子树加上自己，就是以自己为根的二叉树序列化结果
        const key = node.val + "," + collect(node.left) + collect(node.right);
        // 让每个节点把自己的序列化结果存进去，对于每个节点，就可以知道有没有其他节点的子树和自己重复了
        let freq = count.get(key) || 0;
        // 多次重复也只会被加入结果集一次
        if (freq === 1) {
            // 有人和我重复，把自己加入结果列表
            res.push(node);
        }
        count.set(key, freq + 1);
        return key;
    };
    collect(root);
    return res;
};
