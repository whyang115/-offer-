/**
 * 斐波那契数列
 * 使a指向第一项,b指向第二项,依次顺延,a指向第二项,b指向第三项,返回b
 * @param {*} n
 */
function Fibonacci(n) {
  if (n === 0) return 0;
  let a = 1,
    b = 1;
  while (n-- >= 3) {
    b = a + b;
    a = b - a;
  }
  return b;
}
