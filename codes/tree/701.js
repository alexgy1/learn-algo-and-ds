//https://leetcode.com/problems/insert-into-a-binary-search-tree/
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root == null) return new TreeNode(val);

  if (root.val > val) {
    //要构造
    root.left = insertIntoBST(root.left, val);
  }
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
