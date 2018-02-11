/**
 * 二进制中1的个数
 * 二进制数减一后 第一个1变为0，后面的变为1 与原数相与后都变为了0
 * 所以有多少1即可以做多少次这样的操作
 * @param {*} n
 */
function numberOf1(n) {
  let count = 0;
  while (n !== 0) {
    ++count;
    n = (n - 1) & n;
  }
  return count;
}
console.log(numberOf1(10));
