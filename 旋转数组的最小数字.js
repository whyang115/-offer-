/**
 * 旋转数组
 * 非递增数列旋转,即找到分界元素(既不大于左边元素又不大于右边元素)
 * @param {*} rotateArray
 */
function minNumberInRotateArray(rotateArray) {
  if (!rotateArray.length) return 0;
  for (let i = 0; i < rotateArray.length; i++) {
    if (rotateArray[i] > rotateArray[i + 1]) return rotateArray[i + 1];
  }
  return rotateArray[0];
}
