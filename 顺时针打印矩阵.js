/**
 * 顺时针打印矩阵
 * 用left、right、top、bot四个变量分别保存矩阵的四条边
 * 绕着四条边依次顺时针循环
 * @param {*} matrix
 */
function printMatrix(matrix) {
  let res = [];
  let row = matrix.length;
  let col = matrix[0].length;
  if (!row || !col) return res;
  let left = 0,
    right = col - 1,
    bot = row - 1,
    top = 0;
  while (left <= right && top <= bot) {
    if (left <= right) {
      for (let i = left; i <= right; ++i) res.push(matrix[top][i]);
    }
    if (top <= bot) {
      for (let i = ++top; i <= bot; ++i) res.push(matrix[i][right]);
    }
    if (left <= right && top <= bot) {
      for (let i = --right; i >= left; --i) res.push(matrix[bot][i]);
    }
    if (top <= bot && left <= right) {
      for (let i = --bot; i >= top; --i) res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
}
console.log(
  printMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
);
console.log(printMatrix([[1], [2], [3], [4], [5]]));
console.log(printMatrix([[1, 2, 3, 4, 5]]));
console.log(
  printMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]])
);
console.log(printMatrix([[1, 2], [3, 4]]));
