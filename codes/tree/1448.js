var countGoodNode = function (root) {
  //需要传递maxVal
  //inOrder counting good nodes
  let inOrder = (root, maxVal) => {
    if (root == null) return 0;
    let res = 0;
    if (root.val >= maxVal) {
      res++;
    }
    maxVal = Math.max(root.val, maxVal);

    res += inOrder(root.left, maxVal);
    res += inOrder(root.right, maxVal);

    return res;
  };
  inOrder(root, root.val);
};
