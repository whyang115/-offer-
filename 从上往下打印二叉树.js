/**
 * 从上往下打印二叉树
 * 借助一个辅助数组,将每一层的左右子节点都push进辅助数组中
 * @param {*} root
 */
function printFromTopToBottom(root) {
  if (root == null) return [];
  let arr = [];
  let res = [];
  arr.push(root);
  while (arr.length) {
    let node = arr.shift();
    res.push(node.val);
    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
  }
  return res;
}
