/**
 * 二叉树的镜像
 * 交换根节点的左右子节点
 * 然后递归交换每一个子树的左右节点
 * @param {*} root
 */
function mirror(root) {
  if (root === null) return root;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  mirror(root.left);
  mirror(root.right);
}
