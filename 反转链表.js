/**
 * 反转链表
 * 循环解开原链表节点并依次反转添加在新链表上
 * @param {*} head
 */
function ReverseList(head) {
  if (head === null || head.next === null) return head;
  let pre = null;
  let next = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}
