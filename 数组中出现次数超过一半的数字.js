/**
 * 数组中出现次数超过一半的数字
 * 若一个数字超过一半,即此数字为出现最多次的数字
 * 定义一个数字变量和一个标志变量
 * 循环数组，若当前数字与数字变量相同则令标志变量加1,若不同则令数字变量为当前数字
 * 最后判断该数字出现的次数是否大于数组长度的一半
 * @param {} num
 */
function moreThanHalf(num) {
  let len = num.length;
  let count = 0;
  let res = num[0];
  let times = 0;
  num.forEach(item => {
    if (item === res) ++count;
    if (item !== res) count - 1 === 0 ? (res = item) : void 0;
  });
  for (let i = 0; i < len; i++) {
    if (num[i] === res) times++;
  }
  if (times > Math.floor(len / 2)) return res;
  return 0;
}

console.log(moreThanHalf([1, 2, 3, 2, 2, 2, 5, 4, 2]));
