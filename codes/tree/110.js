//求深度 从上往下 前序遍历
//求高度 从下往上 后序遍历
//根节点的高度就是二叉树的最大深度  所以可以通过后序遍历求根节点的高度 来求得最大深度
var isBalanced = function (root) {
  let post = (root) => {
    //isBalanced and height
    if (root == null) return [true, 0];

    let left = post(root.left);
    let right = post(root.right);

    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  };
  return post(root)[0];
};
