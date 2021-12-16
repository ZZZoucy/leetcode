// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
// 输入： 1->2->3->4->5 和 k = 2       输出： 4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
    // 将链表复制到数组中
    let vals = [];
    while (head !== null) {
        vals.push(head.val);
        head = head.next;
    }
    // 返回下标为 vals.length - k 的值
    return vals[vals.length - k];
};
