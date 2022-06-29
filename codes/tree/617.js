var mergeTwoTrees = function (root1, root2) {
  if (root1 == null && root2 == null) return null;
  let val1 = root1 ? root1.val : 0;
  let val2 = root2 ? root2.val : 0;
  let root = new ListN(val1 + val2);

  let l1 = root1.left ? root1.left : null;
  let l2 = root2.left ? root2.left : null;
  let r1 = root1.right ? root1.right : null;
  let r2 = root2.right ? root2.right : null;

  root.left = mergeTwoTrees(l1, l2);
  root.right = mergeTwoTrees(r1, r2);
  return root;
};
