/**
 * 二叉搜索树的后序遍历序列
 * 后序遍历序列的最后一个值为根节点
 * 所以遍历序列前一个值小于根节点后一个值大于根节点即为分界处
 * 依次循环左节点和右节点,若出现左节点中的值大于根节点或右节点中的值小于根节点返回false
 * 递归每个子节点,直到节点数为1时返回true
 * @param {*} sequence
 */
function VerifySequenceOfBST(sequence) {
  if (!Array.isArray(sequence) || sequence.length === 0) return false;
  if (sequence.length === 1) return true;
  let root = sequence[sequence.length - 1];
  if (sequence.length >= 2) {
    let index;
    for (let i = sequence.length - 2; i >= 0; i--) {
      if (sequence[i] < root) {
        index = i;
        break;
      }
    }
    let left = sequence.slice(0, index + 1);
    let right = sequence.slice(index + 1, sequence.length - 1);
    for (let i = 0; i < left.length - 1; i++) {
      if (left[i] > root) return false;
    }
    for (let i = 0; i < right.length - 1; i++) {
      if (right[i] < root) return false;
    }
    return VerifySequenceOfBST(left) || VerifySequenceOfBST(right);
  }
}

// console.log(VerifySequenceOfBST([4, 8, 6, 12, 16, 14, 10]));
console.log(VerifySequenceOfBST([4, 6, 7, 5]));
