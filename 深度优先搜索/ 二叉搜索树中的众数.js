// 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
// 给定 BST = [1,null,2,2]
// 返回 [2]

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
 * @return {number[]}
 */
var findMode = function (root) {
    // cur 当前节点元素，count记录每个元素出现的次数，maxCount记录出现的最大次数
    let cur = 0,
        count = 0,
        maxCount = 0;
    // res 储存符合的众数
    let res = [];

    const update = (x) => {
        // 遍历到的元素如果等于当前元素，count++
        // 否则说明该元素第一次出现，让 count=1 ； 当前元素更新为遍历到的元素
        if (x === cur) {
            ++count;
        } else {
            count = 1;
            cur = x;
        }
        // 如果 count === maxCount 说明当前元素也是出现次数最大的元素，push 到 res 中
        if (count === maxCount) {
            res.push(cur);
        }
        // 如果 count > maxCount 说明当前元素出现次数更多，于是更新 maxCount 为 count
        // 并且直接用 cur 覆盖之前的 res
        if (count > maxCount) {
            maxCount = count;
            res = [cur];
        }
    };

    // 中序遍历的递归函数
    const dfs = (o) => {
        if (!o) {
            return;
        }
        dfs(o.left);
        update(o.val);
        dfs(o.right);
    };
    dfs(root);
    return res;
};
