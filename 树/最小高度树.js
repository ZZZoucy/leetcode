// 给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。
// 输入：[-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 有序就二分来找下一个中间节点作为根节点，然后递归创建左右子树。

var sortedArrayToBST = function (nums) {
    function buildTree(nums, left, right) {
        if (left > right) return null;
        let mid = left + ((right - left) >> 1);
        let node = new TreeNode(nums[mid]);
        node.left = buildTree(nums, left, mid - 1);
        node.right = buildTree(nums, mid + 1, right);
        return node;
    }
    return buildTree(nums, 0, nums.length - 1);
};
