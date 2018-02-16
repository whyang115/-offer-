/**
 * 树的子结构
 * 如果树1的根节点与树2的根节点相同,则调用isSub方法依次比对子节点是否相同
 * 若不相同则分别使树1的左子节点和右子节点作为根节点和树2比较
 * @param {*} tree1
 * @param {*} tree2
 */
function hasSub(tree1, tree2) {
  let res = false;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.val === tree2.val) {
    res = isSub(tree1, tree2);
  }
  if (!res) {
    res = isSub(tree1.left, tree2);
  }
  if (!res) {
    res = isSub(tree1.right, tree2);
  }
  return res;
}
/**
 * 判断是否完全匹配
 * 当树2递归查看完毕后返回true,若出现树1先循环完毕或树1节点与树2节点不相等时返回false
 * @param {*} tree1
 * @param {*} tree2
 */
function isSub(tree1, tree2) {
  if (tree2 === null) return true;
  if (tree1 === null) return false;
  if (tree1.val !== tree2.val) return false;
  return isSub(tree1.left, tree2.left) && isSub(tree1.right, tree2.right);
}
