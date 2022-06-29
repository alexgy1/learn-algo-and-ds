/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function(root) {

//    let res = []
//    let postOrder = (root)=>{
//        if(root == null) return

//        postOrder(root.left)
//        postOrder(root.right)
//        res.push(root.val)
//    }
//    postOrder(root)
//    return res

// };
var postorderTraversal = function (root) {
  let res = [];
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
    res.push(node.val);
  }

  return res;
};
