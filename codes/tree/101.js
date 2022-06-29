/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  //返回值 布尔值
  //参数是左右子子节点

  //只有保证左右子节点的不同 才可以继续递归
  var isSame = (left, right) => {
    if (left == null && right == null) return true;

    if (left == null) return false;
    if (right == null) return false;
    if (right.val !== left.val) return false;

    let isSameL = isSame(left.left, right.right);
    let isSameR = isSame(left.right, right.left);

    return isSameL && isSameR;
  };

  if (root == null) return true;
  return isSame(root.left, root.right);
};
