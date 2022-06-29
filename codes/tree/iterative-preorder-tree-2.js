// 1) Create an empty stack nodeStack and push root node to stack.
// 2) Do the following while nodeStack is not empty.
// ….a) Pop an item from the stack and print it.
// ….b) Push right child of a popped item to stack
// ….c) Push left child of a popped item to stack
// The right child is pushed before the left child to make sure that the left subtree is processed first.

class Node {
  constructor(item) {
    this.left = null;
    this.right = null;
    this.val = item;
  }
}

let root = null;

//TC O(N)
//SC O(H) H is the height of the tree
function iterativePreOrder(root) {
  if (root == null) return;

  let st = [];

  //start from root node
  let curr = root;

  while (curr !== null || st.length > 0) {
    //print root and left children  while exist and
    //keep pushing right into the stack
    while (curr !== null) {
      console.log(curr.val);

      if (curr.right !== null) {
        st.push(curr.right);
      }

      curr = curr.left;
    }

    //we reach when our currr is null , so We take out a right child  from stack
    //curr == null &&
    if (st.length > 0) {
      curr = st.pop();
    }
  }
}

// Driver Code
root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

iterativePreOrder(root);
