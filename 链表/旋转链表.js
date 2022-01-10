// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
// 输入：head = [1,2,3,4,5], k = 2
// 输出：[4,5,1,2,3]
// 输入：head = [0,1,2], k = 4
// 输出：[2,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || !k) return head;
    // len初始值为 1，是指 head 头节点。cur = head = 1 是头节点
    let len = 1,
        cur = head;
    while (cur.next) {
        cur = cur.next;
        len++;
    }
    // 此时计算长度的循环结束，cur已经是指向最后一个节点 5 了
    // console.log(cur)  // [5]
    // 所以 cur.next 是指向 null 的，那么 cur.next=head 就使得链表成为一个闭环
    cur.next = head;
    let move = len - (k % len);
    while (move) {
        cur = cur.next;
        move--;
    }
    let ans = cur.next;
    cur.next = null;
    return ans;
};
