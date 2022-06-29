function levelOrder(root) {
  if (!root) return;
  let queue = [root];
  let res = [];
  while (queue.length) {
    let len = queue.length;
    let temp = [];

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      temp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    res.push(temp);
  }
  return res;
}

function dfs(root) {
  let res = [];
  let inOrder = (root, depth) => {
    if (!root) return;
    res[depth] = res[depth] || [];
    res[depth].push(root.val);
    inOrder(root.left, depth + 1);
    inOrder(root.right, depth + 1);
  };
  inOrder(root, 0);
  return res.reverse();
}
