// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
// 输入：head = [4, 2, 1, 3]           输出：[1, 2, 3, 4]
// 输入：head = [-1, 5, 3, 4, 0]       输出：[-1, 0, 3, 4, 5]
// 输入：head = []                     输出：[]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    return toSortList(head, null);
};
// 链表分成左右两区间进行排序
const toSortList = (head, tail) => {
    if (head === null) return head;
    if (head.next === tail) {
        head.next = null;
        return head;
    }
    let slow = head;
    let fast = head;
    while (fast !== tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) {
            fast = fast.next;
        }
    }
    const mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));
};
// 左右两个有序链表进行合并
const merge = (head1, head2) => {
    const dummyHead = new ListNode(0);
    let temp = dummyHead;
    let temp1 = head1,
        temp2 = head2;
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }
    if (temp1 !== null) {
        temp.next = temp1;
    } else if (temp2 !== null) {
        temp.next = temp2;
    }
    return dummyHead.next;
};
