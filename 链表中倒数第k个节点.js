// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 快慢指针的思想。
// 我们将第一个指针 fast 指向链表的第 k+1 个节点，第二个指针 slow 指向链表的第 1 个节点
// 此时指针 fast 与 slow 二者之间刚好间隔 k 个节点
// 此时两个指针同步向后走，当第一个指针 fast 走到链表的尾部空节点时，则此时 slow 指针刚好指向链表的倒数第 k 个节点

// 我们首先将 fast 指向链表的头节点，然后向后走 k 步，则此时 fast 指针刚好指向链表的第 k+1 个节点
// 我们首先将 slow 指向链表的头节点，同时 slow 与 fast 同步向后走，当 fast 指针指向链表的尾部空节点时，则此时返回 slow 所指向的节点即可
var getKthFromEnd = function (head, k) {
    let fast = head,
        slow = head;
    while (fast && k > 0) {
        [fast, k] = [fast.next, k - 1];
    }
    while (fast) {
        [fast, slow] = [fast.next, slow.next];
    }
    return slow;
};
