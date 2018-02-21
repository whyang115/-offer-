/**
 * 二叉树的深度
 * 递归的寻找最长的子节点
 * @param {*} root
 */
function treeDepth(root) {
  if (!root) return 0;
  return Math.max(treeDepth(root.left), treeDepth(root.right)) + 1;
}
