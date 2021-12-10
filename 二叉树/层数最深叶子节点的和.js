// 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。
//             1
//           /   \
//          2     3
//        /  \     \
//       4    5     6
//     /             \
//    7               8
// 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// 输出：15
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

// 遍历二叉树，将每一层值以数组的形式存入数组，将获取的数组末尾元素叠加求和输出结果
var deepestLeavesSum = function (root) {
    var arr = [];
    dfs(root, 0);
    var res = 0;
    if (arr.length === 0) return res;
    // arr = [[1], [2,3], [4,5,6], [7,8]]
    for (var i = 0; i < arr[arr.length - 1].length; i++) {
        res += arr[arr.length - 1][i];
    }
    return res;
    function dfs(root, n) {
        if (!root) return;
        if (!Array.isArray(arr[n])) arr[n] = [];
        arr[n].push(root.val);
        dfs(root.left, n + 1);
        dfs(root.right, n + 1);
    }
};
