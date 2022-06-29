//二叉树的最大深度 就是根节点的最大高度

function maxDepth(root) {
  //   return maxHeight(root);
  let result = 0;
  if (root == null) return result;
  maxHeight2(root, 1);
  return result;
}

function maxHeight(root) {
  if (root == null) return 0;

  let lH = maxHeight(root.left);
  let rH = maxHeight(root.right);

  let max = 1 + Math.max(lH, rH);
  return max;
}

function maxHeight2(root, depth) {
  result = depth > result ? depth : result;
  if (root.left == null && root.right == null) return;

  if (root.left) {
    depth++;
    maxHeight2(root.left, depth);
    depth--;
  }
  if (root.right) {
    depth++;
    maxHeight2(root.right, depth);
    depth--;
  }
}

function maxHeight3(root) {
  let queue = [root];
  let depth = 0;
  while (queue) {
    let len = queue.length;
    depth++;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return depth;
}
