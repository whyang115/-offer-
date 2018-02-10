/**
 * 树的节点类
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * 已知前序遍历和中序遍历重构二叉树
 * 前序遍历为根-->左-->右,中序遍历为左-->根-->右
 * 递归的从前序遍历中取根节点,再从中序遍历中取左右节点,
 * @param {*} pre
 * @param {*} vin
 */
function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0 || vin.length === 0) return null;
  let root = pre[0];
  let index = vin.indexOf(root);
  let binaryTree = new TreeNode(root);
  binaryTree.left = reConstructBinaryTree(
    pre.slice(1, index + 1),
    vin.slice(0, index)
  );
  binaryTree.right = reConstructBinaryTree(
    pre.slice(index + 1),
    vin.slice(index + 1)
  );
  return binaryTree;
}
var pre = [1, 2, 4, 7, 3, 5, 6, 8];
var vin = [4, 7, 2, 1, 5, 3, 8, 6];
console.log(reConstructBinaryTree(pre, vin));
