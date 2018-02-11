/**
 * 链表中倒数第k个节点
 * 将每个节点都push到数组中,再从数组取出对应的值
 * @param {*} head
 * @param {*} k
 */
function findKthToTail(head, k) {
  if (head === null) return false;
  var temp = [head];
  while (head.next !== null) {
    temp.push(head.next);
    head = head.next;
  }
  let len = temp.length;
  return temp[len - k];
  console.log(temp);
}
