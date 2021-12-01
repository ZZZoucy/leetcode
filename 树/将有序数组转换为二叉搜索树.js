// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]

// 如果根据数组构造一棵二叉树。
// 本质就是寻找分割点，分割点作为当前节点，然后递归左区间和右区间。
// 分割点就是数组中间位置的节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const buildTree = (Arr, left, right) => {
        // 递归终止条件
        if (left > right) return null;

        // 中间位置的节点
        let mid = Math.floor(left + (right - left) / 2);

        // 创建一棵二叉树，递归左子树、右子树
        let root = new TreeNode(Arr[mid]);
        root.left = buildTree(Arr, left, mid - 1);
        root.right = buildTree(Arr, mid + 1, right);
        return root;
    };
    return buildTree(nums, 0, nums.length - 1);
};
