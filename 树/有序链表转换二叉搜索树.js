// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
// 给定的有序链表： [-10, -3, 0, 5, 9]
// 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {
    const arr = [];
    // 将链表节点的值逐个推入数组arr，即将有序链表转为有序数组
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    // 根据索引start到end的子数组构建子树，双指针
    const buildBST = (start, end) => {
        // 终止条件
        if (start > end) return null;
        // 求中间索引 中间元素是根节点的值
        const mid = (start + end) >>> 1;
        // 以中间索引对应的值作为根节点，创建
        const root = new TreeNode(arr[mid]);
        root.left = buildBST(start, mid - 1);
        root.right = buildBST(mid + 1, end);
        return root;
    };
    return buildBST(0, arr.length - 1);
};
