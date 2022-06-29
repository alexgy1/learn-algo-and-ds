function printAllLeafNodes(root) {
  if (root == null) return;
  if (root.left == null && root.right == null) {
    console.log(root);
    return;
  }
  printAllLeafNodes(root.left);
  printAllLeafNodes(root.right);
}
