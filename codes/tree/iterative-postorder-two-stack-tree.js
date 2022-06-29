// 1. Push root to first stack.
// 2. Loop while first stack is not empty
//    2.1 Pop a node from first stack and push it to second stack
//    2.2 Push left and right children of the popped node to first stack
// 3. Print contents of second stack

//根 右 左 reversedStack 里面存的顺序
//逆序之后
//左 右 根 s2里面存的顺序 符合后序遍历的输出顺序
class node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

let root = null;
function postOrderIterative(root) {
  let reversedStack = [],
    s2 = [];

  if (root === null) return;

  reversedStack.push(root);

  while (reversedStack.length > 0) {
    const root = reversedStack.pop();
    s2.push(root);
    root.left && reversedStack.push(root.left);
    root.right && reversedStack.push(root.right);
  }

  // Print all elements of second stack
  while (s2.length > 0) {
    let node = s2.pop();
    console.log(node.val);
  }
}

root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);
root.right.left = new node(6);
root.right.right = new node(7);

postOrderIterative(root);
