/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  //[8,5,1,7,10,12]

  //root 8
  //root.left = 5 < 8
  //root.right = 怎么确定下来？
  const dfs = (l, r) => {
    if (l == r) return new TreeNode(preorder[l]);
    if (l > r) {
      return null;
    }
    const rootVal = preorder[l];
    let pos = l + 1; //new left
    let root = new TreeNode(rootVal);
    //如何找新的root  根据preorder的特点 根 左 右边 并且是二叉搜索树 right > left
    while ( pos  < preorder.length && preorder[pos] < rootVal) {
      pos += 1;
    }
    //pos 左边都比它小
    //l+1 因为root已经被用过了
    //5,1,7 l+1 ---- pos = 10的下标  -1
    root.left = dfs(l + 1, pos - 1);
    //10 ---- 12
    root.right = dfs(pos, r);

    return root;
  };

  return dfs(0, preorder.length - 1);
};
