// 输入：[5,4,1,2,6,7,8]
// 前序遍历（中左右）：[5,4,1,2,6,7,8]
// 中序遍历（左中右）：[1,4,2,5,7,6,8]
// 后序遍历（左右中）：[1,2,4,7,8,6,5]
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

// 后序遍历（左右中）递归
var nextorderTraversal = function (root, res = []) {
    if (!root) return res;
    nextorderTraversal(root.left, res);
    nextorderTraversal(root.right, res);
    res.push(root.val);
    return res;
};

// 后序遍历（左右中）递归
var postorderTraversal = function (root) {
    let res = [];
    const dfs = function (root) {
        if (root === null) return;
        dfs(root.left);
        dfs(root.right);
        res.push(root.val);
    };
    dfs(root);
    return res;
};

// 后序遍历（左右中）迭代
// 入栈 左 -> 右
// 出栈 中 -> 右 -> 左 结果翻转
var postorderTraversal = function (root, res = []) {
    if (!root) return res;
    const stack = [root];
    let cur = null;
    do {
        cur = stack.pop();
        res.push(cur.val);
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    } while (stack.length);
    return res.reverse();
};
