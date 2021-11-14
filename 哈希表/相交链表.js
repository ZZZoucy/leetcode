// 哈希表

// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const visited = new Set();
    // 首先遍历链表 headA，并将链表 headA 中的每个节点加入哈希集合中。
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    // 然后遍历链表 headB，对于遍历到的每个节点，判断该节点是否在哈希集合中：
    // 如果当前节点不在哈希集合中，则继续遍历下一个节点；
    // 如果当前节点在哈希集合中，则后面的节点都在哈希集合中，即从当前节点开始的所有节点都在两个链表的相交部分，因此在链表 headB 中遍历到的第一个在哈希集合中的节点就是两个链表相交的节点，返回该节点。
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    // 如果链表 headB 中的所有节点都不在哈希集合中，则两个链表不相交，返回 null。
    return null;
};
