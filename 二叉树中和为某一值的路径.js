/**
 * 二叉树中和为某一值的路径
 * 递归的查找子树,分别将路径和加和存入数组
 * @param {*} root
 * @param {*} expectNumber
 */
function findPath(root, expectNumber) {
  let path = [];
  let sum = 0;
  let arr = [];
  getSum(root, sum, arr, path, expectNumber);
  return path;
}
function getSum(root, sum, arr, path, expectNumber) {
  if (root !== null) {
    sum += root.val;
    arr.push(root.val);
    if (sum <= expectNumber) {
      let leftArr = arr.concat();
      let rightArr = arr.concat();
      if (root.left !== null) getSum(root.left, sum, leftArr, path);
      if (root.right !== null) getSum(root.right, sum, rightArr, path);
      if (root.left === null && root.right === null && sum === expectNumber)
        path.push(arr);
    }
  }
}
