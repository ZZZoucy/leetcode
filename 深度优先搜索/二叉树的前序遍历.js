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

// 前序遍历（中左右）递归
var preorderTraversal = function (root, res = []) {
    if (!root) return res;
    res.push(root.val); // 先序遍历所以从父节点开始
    preorderTraversal(root.left, res); // 递归左子树
    preorderTraversal(root.right, res); // 递归右子树
    return res;
};

// 前序遍历（中左右）递归
var preorderTraversal = function (root) {
    let res = [];
    const dfs = function (root) {
        if (root === null) return;
        res.push(root.val); // 先序遍历所以从父节点开始
        dfs(root.left); // 递归左子树
        dfs(root.right); // 递归右子树
    };
    // 只使用一个参数，所以使用闭包进行存储结果
    dfs(root);
    return res;
};

// 前序遍历（中左右）迭代
// 入栈 右 -> 左
// 出栈 中 -> 左 -> 右
var preorderTraversal = function (root, res = []) {
    if (!root) return res;
    const stack = [root];
    let cur = null;
    while (stack.length) {
        cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
};
