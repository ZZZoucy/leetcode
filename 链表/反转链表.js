// 输入一个长度为n链表，反转链表后，输出新链表的表头。
// 输入：{1,2,3}   输出：{3,2,1}

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(head) {
    // 用 pre 记录当前节点的前一个节点
    let pre = null;
    // 用 cur 记录当前节点
    let cur = head;
    // 如果当前节点不为空，进入循环
    while (cur) {
        // 用 next 记录当前节点的后一个节点的位置
        let next = cur.next;
        // 让当前的节点指向前一个节点的位置
        cur.next = pre;
        // pre 往右走
        pre = cur;
        // 当前节点往右继续走
        cur = next;
    }
    return pre;
}
