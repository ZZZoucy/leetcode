// 给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树。
// 输入：root = [1,3,null,null,2]        输出：[3,1,null,null,2]

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var recoverTree = function (root) {
    const nums = [];
    // 先对root进行中序遍历
    inorder(root, nums);
    // 查找遍历后的nums中不符合中序顺序的节点
    const [first, second] = findTwoSwapped(nums);
    // 对这两个节点进行恢复
    recover(root, 2, first, second);
};
// 中序遍历
const inorder = (root, nums) => {
    if (root === null) {
        return;
    }
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
};
// 中序遍历一定是递增的，如果出现不是递增的节点，就记录下来
const findTwoSwapped = (nums) => {
    const n = nums.length;
    let index1 = -1,
        index2 = -1;
    for (let i = 0; i < n - 1; ++i) {
        if (nums[i + 1] < nums[i]) {
            index2 = i + 1;
            if (index1 === -1) {
                index1 = i;
            } else {
                break;
            }
        }
    }
    let x = nums[index1],
        y = nums[index2];
    return [x, y];
};
// 找到不符合中序遍历的 x，y 两个节点，进恢复
const recover = (r, count, x, y) => {
    if (r !== null) {
        if (r.val === x || r.val === y) {
            r.val = r.val === x ? y : x;
            if (--count === 0) {
                return;
            }
        }
        recover(r.left, count, x, y);
        recover(r.right, count, x, y);
    }
};
