/**
 * 连续子数组的最大和
 * 遍历数组 遇到和为负弃之 重新累加
 * @param {} arr
 */
function findGreatSumOfSubArr(arr) {
  if (arr.length === 1) return arr[0];
  let sum = arr[0],
    temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    temp = temp < 0 ? arr[i] : temp + arr[i];
    sum = temp > sum ? temp : sum;
  }
  return sum;
}
console.log(findGreatSumOfSubArr([6, -3, -2, 7, -15, 1, 2, 2]));
