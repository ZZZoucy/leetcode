// 编写一个函数，检查输入的链表是否是回文的。
// 输入： 1->2                 输出： false
// 输入： 1->2->2->1           输出： true

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
var isPalindrome = function (head) {
    // 链表分为数组列表和链表
    // 这道题将链表复制到数组中，双指针进行比较即可完成，而直接在链表上进行操作却不是很方便
    // 将链表复制到数组中
    const vals = [];
    while (head !== null) {
        vals.push(head.val);
        head = head.next;
    }
    // 双指针进行比较
    for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
        if (vals[i] !== vals[j]) {
            return false;
        }
    }
    return true;
};
