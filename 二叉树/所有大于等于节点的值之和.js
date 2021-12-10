// 给定一个二叉搜索树，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。
// 提醒一下，二叉搜索树满足下列约束条件：
// 节点的左子树仅包含键 小于 节点键的节点。
// 节点的右子树仅包含键 大于 节点键的节点。
// 左右子树也必须是二叉搜索树。
//              4(30)
//           /       \
//         1(36)       6(21)
//       /   \        /   \
//      0(36) 2(35)  5(26) 7(15)
//             \            \
//              3(33)        8(8)

// 输入：root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// 输出：root = [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let sum = 0;
    function dfs(root) {
        if (!root) return;
        dfs(root.right);
        sum += root.val;
        root.val = sum;
        dfs(root.left);
    }
    dfs(root);
    return root;
};
