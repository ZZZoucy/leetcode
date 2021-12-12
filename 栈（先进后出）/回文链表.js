// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
// 输入：head = [1,2,2,1]       输出：true

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 链表包括数组列表和链表
var isPalindrome = function (head) {
    const arr = [];
    // 把链表复制到一个数组列表里
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    // 对数组进行遍历 双指针判断
    for (let i = 0, j = arr.length - 1; i < j; ++i, --j) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
};
