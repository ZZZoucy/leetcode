// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);
    const newArr = new Array();
    let pushList = dummy;
    while (pushList != null) {
        newArr.push(pushList);
        pushList = pushList.next;
    }
    newArr[newArr.length - n - 1].next = newArr[newArr.length - n - 1].next.next;
    return dummy.next;
};
