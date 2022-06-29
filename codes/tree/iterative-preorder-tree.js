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
    this.data = item;
  }
}

let root = null;

//TC O(N)
//SC O(N)
function iterativePreOrder(root) {
  if (root == null) return;
  let stack = [root];

  while (stack.length > 0) {
    let top = stack.pop();
    console.log(top.data);

    top.right && stack.push(top.right);
    top.left && stack.push(top.left);
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
