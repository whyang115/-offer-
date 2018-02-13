/**
 * 合并两个排序后的链表
 * @param {*} head1
 * @param {*} head2
 */
function merge(head1, head2) {
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  if (head1.val > head2.val) {
    head2.next = merge(head1, head2.next);
    return head2;
  } else {
    head1.next = merge(head1.next, list2);
    return head1;
  }
}
