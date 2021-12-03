// 给定一个不含重复元素的整数数组 nums 。一个以此数组直接递归构建的 最大二叉树 定义如下：
// 二叉树的根是数组 nums 中的最大元素。
// 左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
// 右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。
// 返回有给定数组 nums 构建的 最大二叉树 。

// 输入：nums = [3,2,1,6,0,5]
// 输出：[6,3,5,null,2,0,null,null,1]

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
var constructMaximumBinaryTree = function (nums) {
    // 递归（arr,子树开始下标,子树结束下标）
    const BuildTree = (arr, left, right) => {
        // 终止条件
        if (left > right) return null;
        // 找到最大值以及它的下标（创建一棵树，最重要的是找到分割点）
        let maxValue = -1;
        let maxIndex = -1;
        for (let i = left; i <= right; ++i) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;
            }
        }
        // 以最大值为根节点创建
        let root = new TreeNode(maxValue);
        root.left = BuildTree(arr, left, maxIndex - 1);
        root.right = BuildTree(arr, maxIndex + 1, right);
        return root;
    };
    let root = BuildTree(nums, 0, nums.length - 1);
    return root;
};
