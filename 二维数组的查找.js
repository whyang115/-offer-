var dichotomy = require("./dichotomy");
// method1
/**
 * 循环最外层数组,若数组中的第一项小于target 且 最后一项大于target即对此数组进行二分法求值
 * @param {*} target
 * @param {*} arr
 */
function find(target, arr) {
  for (var i = 0; i < arr.length; i++) {
    let len = arr[i].length;
    if (arr[i][0] <= target && arr[i][len - 1] >= target) {
      return dichotomy(arr[i], target);
    }
  }
  return false;
}

// method2
/**
 * 由题目得 先查看arr[arr.length - 1][0]处的元素,若大于target向上寻找,若小于target向右寻找
 * @param {*} target
 * @param {*} arr
 */
function find(target, arr) {
  let len = arr.length - 1;
  if (len < 0) return false;
  let start = arr[len][0];
  if (start === target) return true;
  if (start < target) {
    return dichotomy(arr[len], target, true);
  } else {
    return find(target, arr.slice(0, len));
  }
}
