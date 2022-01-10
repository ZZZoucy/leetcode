// 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
// 返回同样按升序排列的结果链表。
// 输入：head = [1,2,3,3,4,4,5]
// 输出：[1,2,5]

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
var deleteDuplicates = function (head) {
    let node = new ListNode(-1);
    node.next = head;
    // console.log(node)  // node = [-1,1,1,1,2,3]
    let cur = node;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            // 重复
            // 用 val 存下出现重复的那个数值，比如 1
            let val = cur.next.val;
            // 这里会循环去找到 1，然后删除，这样就不会出现永远有一个重复数删不掉的问题
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next;
            }
        } else {
            // 不重复
            cur = cur.next;
        }
    }
    return node.next;
};
