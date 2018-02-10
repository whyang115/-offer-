/**
 * 从尾到头打印链表
 * @param {*} head
 */
function printListFromTailToHead(head) {
  let res = [];
  // 当链表节点不为空时,将节点的值从头插入结果数组
  while (head !== null) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
}
