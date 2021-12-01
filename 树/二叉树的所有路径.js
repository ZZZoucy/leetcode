// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
// 叶子节点 是指没有子节点的节点。
// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]

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
 * @return {string[]}
 */

// 如果当前节点不是叶子节点，则在当前的路径末尾添加该节点，并继续递归遍历该节点的每一个孩子节点。
// 如果当前节点是叶子节点，则在当前路径末尾添加该节点后我们就得到了一条从根节点到叶子节点的路径，将该路径加入到答案即可。

var binaryTreePaths = function (root) {
    let res = [];
    const paths = (root, path) => {
        if (root) {
            path += root.val;
            // 如果当前节点是叶子节点，把路径加入到答案中
            if (root.left === null && root.right === null) {
                res.push(path);
            } else {
                path += "->";
                paths(root.left, path);
                paths(root.right, path);
            }
        }
    };
    paths(root, "");
    return res;
};
