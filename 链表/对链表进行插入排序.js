// 插入排序算法：
// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。
// 输入: 4->2->1->3            输出: 1->2->3->4
// 输入: -1->5->3->4->0        输出: -1->0->3->4->5

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
var insertionSortList = function (head) {
    // 如果head为空，就不用排序了，直接返回
    if (head === null) return head;
    // head不为空，则先创建 dummyHead，令 dummyHead.next = head
    // 引入哑节点是为了便于在 head 节点之前插入节点
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    // lastSorted 为链表的已排序部分的最后一个节点，初始时 lastSorted = head
    let lastSorted = head;
    // curr 为待插入的元素，初始时 curr = head.next
    let curr = head.next;
    while (curr !== null) {
        // 比较 lastSorted 和 curr 的节点值
        // lastSorted小，说明 curr 应该位于 lastSorted 之后，将 lastSorted 后移一位
        if (lastSorted.val <= curr.val) {
            lastSorted = lastSorted.next;
        } else {
            // lastSorted大，说明 curr 应该位于 lastSorted 之前，借助 prev
            // 从链表的头节点开始往后遍历链表中的节点，寻找插入 curr 的位置
            // 令 prev 为插入 curr 的位置的前一个节点，进行如下操作，完成对 curr 的插入
            let prev = dummyHead;
            while (prev.next.val <= curr.val) {
                prev = prev.next;
            }
            lastSorted.next = curr.next;
            curr.next = prev.next;
            prev.next = curr;
        }
        curr = lastSorted.next;
    }
    return dummyHead.next;
};
