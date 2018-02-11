/**
 * 矩形覆盖
 * 仍然是斐波那契数列
 * f(0) = 0
 * f(1) = 1
 * f(2) = 2
 * f(3) = f(2) + f(1)
 * f(n) = f(n - 1) + f(n - 2)
 * @param {*} n
 */
function rectCover(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return rectCover(n - 1) + rectCover(n - 2);
}
console.log(rectCover(10));
