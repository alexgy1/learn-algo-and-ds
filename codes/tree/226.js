var invertTree = function () {
  let dfs = (root) => {
    if (root == null) return;

    dfs(root.left);
    dfs(root.right);
    //post order
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  };
  dfs(root);
  return root 
};
