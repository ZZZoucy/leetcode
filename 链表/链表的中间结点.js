// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。
// 输入：[1, 2, 3, 4, 5]        输出：此列表中的结点 3(序列化形式：[3, 4, 5])
// 输入：[1, 2, 3, 4, 5, 6]     输出：此列表中的结点 4 (序列化形式：[4,5,6])

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
// 单指针法
var middleNode = function (head) {
    // 第一次遍历得到链表个数
    n = 0;
    cur = head;
    while (cur !== null) {
        n++;
        cur = cur.next;
    }
    // 第二次遍历得到 n/2 中间结点
    k = 0;
    cur = head;
    while (k < Math.floor(n / 2)) {
        k++;
        cur = cur.next;
    }
    return cur;
};
