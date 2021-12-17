// 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。
// 请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。
// 输入：list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// 输出：[0,1,2,1000000,1000001,1000002,5]
// 输入：list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
// 输出：[0,1,1000000,1000001,1000002,1000003,1000004,6]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeInBetween = function (list1, a, b, list2) {
    let cur = list1;
    // 遍历到 a 前面一个节点, a 前面的节点无需操作
    for (let i = 0; i < a - 1; i++) {
        cur = cur.next;
    }
    // 过滤掉不需要的节点
    let node = cur.next;
    for (let i = a; i < b + 1; i++) {
        node = node.next;
    }
    // 从 b + 1 位置开始 插入list2
    cur.next = list2;
    while (cur.next) {
        cur = cur.next;
    }
    // list2全部插入之后 指向list1过滤后的所有节点
    cur.next = node;
    return list1;
};
