// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
// 输入：[1, 2, 3, 3, 2, 1]       输出：[1, 2, 3]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
    // 遍历链表，将节点值放入Set
    // 放入Set前判断当前节点值是否存在，若存在，则在链表中删除这个节点
    // 最后返回链表
    // 注意：
    // 删除当前节点的操作是，将当前节点的上一节点指向当前节点的下一节点。
    // 所以要有两个指针，分别为当前节点cur和上一节点pre。删除时，pre.next = cur.next即可删除当前节点。
    if (!head) return head;
    const set = new Set();
    set.add(head.val);
    let [pre, cur] = [head, head.next];
    while (cur) {
        if (set.has(cur.val)) {
            pre.next = cur.next;
        } else {
            set.add(cur.val);
            pre = pre.next;
        }
        cur = cur.next;
    }
    return head;
};
