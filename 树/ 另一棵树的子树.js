// 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。
// 输入：root =       3            subRoot =    4                   输出：true
//                 /   \                      / \
//                4     5                    1   2
//               / \
//              1   2
// 输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]        输出：false

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    //1.遍历root的所有节点，看当前节点和subRoot的根节点是否相等
    //2.相等则继续遍历下去，匹配余下节点，直到subRoot树遍历完
    if (!root && subRoot) {
        return false;
    }
    let linkNode = function (node, target) {
        // 终止条件：一个为空另一个不为空，返回false；两个都为空，返回true
        if (!node && target) return false;
        if (node && !target) return false;
        if (!node && !target) return true;
        // 如果当前节点和subRoot的根节点相等，比较左右子树
        if (node.val === target.val) {
            return linkNode(node.left, target.left) && linkNode(node.right, target.right);
        } else {
            return false;
        }
    };
    return linkNode(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
