let stackA = [];
let stackB = [];
/**
 * 用两个栈实现队列
 * 由于栈为先进后出(FILO),所以用栈B保存栈A的反向副本,出栈使用栈B以实现先进先出(FIFO)
 * @param {} node
 */
function push(node) {
  stackA.push(node);
}
function pop() {
  if (stackB.length === 0) {
    while (stackA.length) {
      stackB.push(stackA.pop());
    }
  }
  return stackB.pop();
}
