function postOrder() {
  //左右根
  let res = [];
  let stack = [];

  if (root) stack.push(root);
  while (stack.length > 0) {
    const node = stack.shift();
    res.unshift(node.val);

    //先左后右 出栈顺序就是先右后左
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return res;
}
