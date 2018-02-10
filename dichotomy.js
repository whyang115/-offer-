/**
 * 二分法查找递增数组中的目标元素
 * @param {*} arr 递增数组
 * @param {*} target 目标元素
 * @param {*} isReturnValue 是否返回找到的元素,默认为不返回即找到元素返回true
 */

function dichotomy(arr, target, isReturnValue = false) {
  let len = arr.length - 1;

  //边界情况处理
  if (len < 0) return false;
  if (arr[0] === target) return isReturnValue ? arr[0] : true;
  if (arr[len] === target) return isReturnValue ? arr[len] : arr[len];

  // 以中间元素为界限,递归寻找目标元素
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) return isReturnValue ? arr[mid] : true;
  if (arr[mid] > target)
    return dichotomy(arr.slice(1, mid), target, isReturnValue);
  if (arr[mid] < target)
    return dichotomy(arr.slice(mid, len), target, isReturnValue);

  // 若条件均不满足，最后返回false
  return false;
}

module.exports = dichotomy;
