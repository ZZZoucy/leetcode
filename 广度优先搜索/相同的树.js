// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
// 输入：p = [1,2,3], q = [1,2,3]      输出：true
// 输入：p = [1,2], q = [1,null,2]     输出：false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 方法二：广度优先搜索
// 首先判断两个二叉树是否为空，如果两个二叉树都不为空，则从两个二叉树的根节点开始广度优先搜索。
// 使用两个队列分别存储两个二叉树的节点。初始时将两个二叉树的根节点分别加入两个队列。每次从两个队列各取出一个节点，进行如下比较操作:

// 比较两个节点的值，如果两个节点的值不相同则两个二叉树一定不同；
// 如果两个节点的值相同，则判断两个节点的子节点是否为空，如果只有一个节点的左子节点为空，或者只有一个节点的右子节点为空，则两个二叉树的结构不同，因此两个二叉树一定不同；
// 如果两个节点的子节点的结构相同，则将两个节点的非空子节点分别加入两个队列，子节点加入队列时需要注意顺序，如果左右子节点都不为空，则先加入左子节点，后加入右子节点。
// 如果搜索结束时两个队列同时为空，则两个二叉树相同。如果只有一个队列为空，则两个二叉树的结构不同，因此两个二叉树不同。

var isSameTree = function (p, q) {
    // 广度优先搜索
    if (!p && !q) return true;
    if (!p || !q) return false;
    const queueP = [p],
        queueQ = [q];
    while (queueP.length && queueQ.length) {
        const nodeP = queueP.shift(),
            nodeQ = queueQ.shift();
        if (nodeP.val !== nodeQ.val) return false;
        if (nodeP.left && nodeQ.left) {
            queueP.push(nodeP.left);
            queueQ.push(nodeQ.left);
        } else if (nodeP.left || nodeQ.left) {
            return false;
        }
        if (nodeP.right && nodeQ.right) {
            queueP.push(nodeP.right);
            queueQ.push(nodeQ.right);
        } else if (nodeP.right || nodeQ.right) {
            return false;
        }
    }
    return queueP.length === 0 && queueQ.length === 0;
};
