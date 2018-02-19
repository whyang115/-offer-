/**
 * 将数组排成最小的数
 * 将数字转为字符串然后按照字符串前后相加小于后前相加的规则排序
 * 将字符串相加转为数字
 * @param {*} arr
 */
function printMinNum(arr) {
  if (!arr.length) return "";
  return parseInt(
    arr
      .map(item => String(item))
      .sort((a, b) => a + b > b + a)
      .reduce((pre, cur) => pre + cur, "")
  );
}
