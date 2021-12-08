// 你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。
// 输入: 二叉树: [1,2,3,4]            输入: 二叉树: [1,2,3,null,4]
//        1                                  1
//      /   \                              /   \
//     2     3                            2     3
//    /                                    \
//   4                                      4
// 输出: "1(2(4))(3)"                 输出: "1(2()(4))(3)"

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
 * @return {string}
 */

// 子节点需要用()来包裹。举例来说，二叉树[root,left,right]，则转换为root(left)(right)。
// 如果只有left为空节点，则输出root()(right)；如果只有right为空节点则可以忽略右节点的()，输出为root(left)。
var tree2str = function (root) {
    return toStr(root);
    function toStr(node) {
        if (node === null) return "()";
        let str = node.val;
        let leftStr = "";
        let rightStr = "";
        if (node.right) {
            leftStr = toStr(node.left);
            rightStr = toStr(node.right);
        } else if (node.left) {
            leftStr = toStr(node.left);
        }
        str += (leftStr && leftStr != "()" ? `(${leftStr})` : leftStr == "()" ? leftStr : "") + (rightStr ? `(${rightStr})` : "");
        return str;
    }
};
