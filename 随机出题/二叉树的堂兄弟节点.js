// 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
// 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
// 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。
// 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
//         1
//        / \
//       2   3
//      /
//     4
// 输入：root = [1,2,3,4], x = 4, y = 3
// 输出：false

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let parentX, parentY;
    let depthX = 0;
    let depthY = 0;

    // 递归遍历，分别记录 x y 的深度和父节点
    const traverse = (root, depth, parent) => {
        if (root === null) return;
        if (root.val === x) {
            // 找到 x，记录它的深度和父节点
            parentX = parent;
            depthX = depth;
        }
        if (root.val === y) {
            // 找到 y，记录它的深度和父节点
            parentY = parent;
            depthY = depth;
        }
        traverse(root.left, depth + 1, root);
        traverse(root.right, depth + 1, root);
    };

    traverse(root, 0, null);
    // 判断 x，y 是否是表兄弟节点
    return depthX == depthY && parentX != parentY;
};
