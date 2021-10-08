// 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：
// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。 计算从根节点到叶节点生成的 所有数字之和
// 输入：root = [1,2,3]
// 输出：25

/**
 * @param {TreeNode} root
 * @return {number}
 */

// 每个节点都对应一个数字，等于其父节点对应的数字乘以 10，再加上该节点的值
// 从根节点开始，遍历每个节点，如果遇到叶子节点，则将叶子节点对应的数字加到数字之和
// 如果当前节点不是叶子节点，则计算其子节点对应的数字，然后对子节点递归遍历

var sumNumbers = function (root) {
    return dfs(root, 0);
};
const dfs = (root, prevSum) => {
    if (root === null) {
        return 0;
    }
    const sum = prevSum * 10 + root.val;
    if ((root.left === null) & (root.right === null)) {
        return sum;
    } else {
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
};
