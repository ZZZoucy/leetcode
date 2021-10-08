// 给定一个链表，判断链表中是否有环。
// 定义两个指针，slow 和 fast
// slow 每走一步，fast 每走两步
// 如果他俩能相遇，说明有环。 如果 fast 发现自己走到 null ，说明无环
// 如果链表为空或者只有一个节点，直接说明无环

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
    if (head === null || head.next === null) return false;

    let slow = head,
        fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
