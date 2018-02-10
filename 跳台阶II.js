/**
 * 跳台阶II
 * f(0) = 0
 * f(1) = f(0) + 1 = 1
 * f(2) = f(1) + 1 = 2
 * f(3) = f(2) + f(1) + 1 = f(2) + f(2) = 4
 * f(n) = f(n - 1) + f(n - 1) = 2 * f(n - 1)
 * @param {*} n
 */
function jumpFloorII(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return 2 * jumpFloorII(n - 1);
}
console.log(jumpFloorII(5));
