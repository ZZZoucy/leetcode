// 给定一个链表，判断链表中是否有环。
// 定义两个指针，slow 和 fast
// slow 每走一步，fast 每走两步
// 如果他俩能相遇，说明有环。 如果 fast 发现自己走到 null ，说明无环
// 如果链表为空或者只有一个节点，直接说明无环

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
    // 哈希表
    let map = new Map();
    while (head) {
        // has方法 返回一个bool值，用来表明 map 中是否存在指定元素
        if (map.has(head)) return true;
        // set() 方法为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对
        // 存的是节点的地址引用，而不是节点值
        map.set(head, true);
        head = head.next;
    }
    return false;

    // 双指针
    /*
    if (head === null || head.next === null) return false;
    let slow = head,
        fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
    */
};
