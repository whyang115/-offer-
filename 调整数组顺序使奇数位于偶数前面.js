/**
 * 调整数组顺序使奇数位于偶数前面
 * 新建一个数组,循环原数组
 * 值为偶数直接push,若为奇数则在奇偶交界处插入
 * 用index保存交界处下标
 * @param {*} array
 */
function reOrderArray(array) {
  var index = 0;
  var res = [];
  array.forEach(item => {
    if (item % 2) {
      res.splice(index, 0, item);
      ++index;
    } else {
      res.push(item);
    }
  });
  return res;
}
console.log(reOrderArray([1, 2, 3, 4, 5]));
