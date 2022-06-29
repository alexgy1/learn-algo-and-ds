function inorde(root) {
  let stack = [];
  let res = [];
  let cur = root;
  while (cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    let parent = stack.pop();
    res.push(parent);
    cur = parent.right;
  }
}
