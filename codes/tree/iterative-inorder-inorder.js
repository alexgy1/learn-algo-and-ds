class Node {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}
let root = null;

function iterativeInorder(root) {
  if (root === null) return;
  const st = [];
  let cur = root;

  while (cur !== null || st.length > 0) {
    while (cur !== null) {
      st.push(cur);
      cur = cur.left;
    }
    //cur  = null
    //reassign it to stack top item
    cur = st.pop();
    console.log(cur.val);
    /* we have visited the node and its
               left subtree.  Now, it's right
               subtree's turn */
    cur = cur.right;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

iterativeInorder(root);
