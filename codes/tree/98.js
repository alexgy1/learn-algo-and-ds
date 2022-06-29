var isValidBST = function (root) {
  var valid = (root, l, r) => {
    if (root == null) return true;

    if (!(root.val > l && root.val < r)) return false;

    return valid(root.left, l, root.val) && valid(root.right, root.val, r);
  };

  return valid(root, -Infinity, Infinity);
};
