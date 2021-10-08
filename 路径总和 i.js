// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
// 输入：root = [1,2,3], targetSum = 5
// 输出：false

/**
 * @param {treenode} root
 * @param {number} targetsum
 * @return {boolean}
 */

let haspathsum = function (root, targetSum) {
    if (root === null) {
        return false;
    }
    var tempVal = targetSum - root.val;
    if (root.left === null && root.right === null && tempVal === 0) {
        return true;
    }
    return haspathsum(root.left, tempVal) || haspathsum(root.right, tempVal);
};

//思路
//递归法
// const traversal = (node, cnt) => {
//     // 遇到叶子节点，并且计数为0
//     if (cnt === 0 && !node.left && !node.right) return true;
//     // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
//     if (!node.left && !node.right) return false;

//     //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
//     if (node.left && traversal(node.left, cnt - node.left.val)) return true;
//     //  右（空节点不遍历）
//     if (node.right && traversal(node.right, cnt - node.right.val)) return true;
//     return false;
// };
// if (!root) return false;
// return traversal(root, targetsum - root.val);
