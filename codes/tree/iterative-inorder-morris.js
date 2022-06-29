class Node {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}
let root = null;

function morrisTraversal(root) {
  let cur, pre;

  if (root === null) return;

  cur = root;

  while (cur !== null) {
    if (cur.left == null) {
      cur = cur.right;
    } else {
      //find the inorder predecessor of  current
      pre = cur.left;
      while (pre.right !== null && pre.right !== cur) {
        pre = pre.right;
      }
      /* Make current as right  child of its  inorder predecessor */
      if (pre.right == null) {
        pre.right = cur;
        cur = cur.left;
      } else {
        pre.right = null;
        console.log(cur.val);
        cur = cur.right;
      }
    }
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

morrisTraversal(root);
