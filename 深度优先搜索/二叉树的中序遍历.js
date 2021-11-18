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

// 中序遍历（左中右）递归
var inorderTraversal = function (root, res = []) {
    if (!root) return res;
    inorderTraversal(root.left, res);
    res.push(root.val);
    inorderTraversal(root.right, res);
    return res;
};

// 中序遍历（左中右）递归
var inorderTraversal = function (root) {
    let res = [];
    const dfs = function (root) {
        if (root === null) return;
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
    };
    dfs(root);
    return res;
};

// 中序遍历（左中右）迭代
// 入栈 左 -> 右
// 出栈 左 -> 中 -> 右
var inorderTraversal = function (root, res = []) {
    const stack = [];
    let cur = root;
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur);
            // 左
            cur = cur.left;
        } else {
            // --> 弹出 中
            cur = stack.pop();
            res.push(cur.val);
            // 右
            cur = cur.right;
        }
    }
    return res;
};
