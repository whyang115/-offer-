/**
 * 青蛙跳台阶,一下只能跳一阶或两阶
 * 若第一下跳一阶则还需要f(n-1)
 * 若第一下跳二阶则还需要f(n-2)
 * 则共需要f(n-1) + f(n-2)
 * @param {*} n
 */
function jumpFloor(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return jumpFloor(n - 1) + jumpFloor(n - 2);
}
console.log(jumpFloor(4));
