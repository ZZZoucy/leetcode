// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 输入：head = [1, 4, 3, 2, 5, 2], x = 3       输出：[1, 2, 2, 4, 3, 5]
// 输入：head = [2,1], x = 2                    输出：[1,2]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    // 创建两个哑结点
    let small = new ListNode(0);
    const smallHead = small;
    let large = new ListNode(0);
    const largeHead = large;
    while (head !== null) {
        // 比 x 小的则插入small，比 x 大的则插入large
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    // 把 small 和 large 合并
    large.next = null;
    small.next = largeHead.next;
    return smallHead.next;
};
