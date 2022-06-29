---
title: 二叉树基础题目汇总
author: 前端关宇
date: "2022-03-01"
---

二叉树的递归可以实现

- 要么是 遍历的功能
  只当遍历用的情况，递归函数不用有返回值，就会涉及到回溯算法 ，需要在递归函数外部声明额外的一个或两个变量 或者数组等 来解决实际的问题 比如**求树的最大深度**

和 遍历的同时 让递归函数本身有返回值的情况

- 要么是 分解问题的功能
  比如**求树的最大深度**, 对于当前节点 H = 1(本身就是一层) + Math.max(LH , RH)
  边界条件就是 L R 都为空 1+ 0 = 1 也正确
  递归函数函数的返回值是当前节点的 H

```js
function maxDepth(root) {
  if (root == null) return 0;

  //分解为左右子树的问题 对于左子树本身 继续分解 分解到叶子节点 返回叶子节点的高度
  let lH = maxDepth(root.left);
  let rH = maxDepth(root.right);
  let curHeight = 1 + Math.max(lH, rH);
  return curHeight;
}

为什么需要后序遍历？
可以想象成我们在根节点， 当前的最大高度就是 Math.max(lH,rH) + 1

假设递归函数帮我们求出了 lH 和rH 我们是不是返回root的最大高度就可以了？ 是的

```

## 1 bfs (Breath First Search) or Level Order

> use queue becasue queue is First In First Out

```js
leetcode 102
/**
* @param {TreeNode} root
* @return {number[][]}
*/
var levelOrder = function (root) {
//3
//9 20
//15 7
//特点是 从上到下 从左到右 先进先出， 符合这个特点的数据结构是queue, 所以使用queue
let res = []; // output
if (root == null) return res;
let queue = [];
//怎么开始？ 先将根节点入队
queue.push(root);
//一直判断的条件： 队不为空
while (queue.length > 0) {
  //观察结果是二维数组 所以要再初始化一个数组 记录当前层级的元素
  let nowLevelArr = [];
  let len = queue.length; //更新当前层级的长度

  for (let i = 0; i < len; i++) {
    //逐个出队
    let node = queue.shift();

    //判断node有的情况 才处理
    if (node) {
      nowLevelArr.push(node.val); //当前节点的值 从左到右 push到 nowLevelArr数组
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  //处理完当前层
  res.push(nowLevelArr);
}

return res;
};
```

## 2 dfs

> recursive

- 2.1 dfs preorder traversal

```js
var dfsPreorderTraversal = function (root) {
  let res = [];
  let preOrder = (root) => {
    if (root == null) return;
    res.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };
  preOrder(root);
  return res;
};
```

- 2.2 dfs inorder

```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var dfsInorderTraversal = function (root) {
  let res = [];
  let inOrder = (root) => {
    if (root == null) return;

    inOrder(root.left);
    res.push(root.val);
    inOrder(root.right);
  };
  inOrder(root);
  return res;
};
```

- 2.3 dfs postorder

```js
let dfsPostOrder = (root) => {
  if (root == null) return;

  dfsPostOrder(root.left);
  dfsPostOrder(root.right);
  console.log(root.val);
};
```

> iterate

- 2.4 pre order

> 遍历顺序和操作顺序一致 可以这么做:

> 用迭代模拟递归（借用系统的调用栈） ， 所以我们迭代实现的时候，要自己申请一个栈， 为什么是栈而不是别的， 因为处理的顺序要后进先出（离根节点越远的越先出来，）栈符合这个特点，所以用栈。

```js
//自己画个图 模拟一下会很清晰
var preorderTraversal = function (root) {
  let stack = [root];
  let res = [];
  //根 左 右的顺序输出
  //入栈的时候 就要根 右 左  后进先出的特点 所以使用栈
  while (stack.length > 0) {
    //根节点要先入栈 再马上出栈， 这样才可以实现先访问根节点
    let node = stack.pop();
    //然后从栈里面取出来的元素，判断是否存在，存在的话， 再判断是否有左右子节点， 有的话，继续按照右 左 的顺序入栈， 这样才可以保证出栈的顺序是 根 左 右
    if (node) {
      res.push(node.val);
      node.right && stack.push(node.right); //要先入栈右节点 才可以保证左节点比右节点先出
      node.left && stack.push(node.left);
    }
  }
  return res;
};
```

- 2.5 in order

`js`

- 2.6 post order

`js`

-



## LeetCode 169 Trim a binray search tree

- When we want to build a tree we often use PreOrder

```js
var trimBST = function (root, low, high) {
  //dfs 参数是什么 返回值是什么
  //参数是 root 返回值是root
  let dfsReturnNode = (root) => {
    if (root == null) return null;

    //preorder
    //如果当前值 比最小值都小 那么他和他的左子树都可以不要（因为是BST） 那么就是要他的右子树
    if (root.val < low) return dfsReturnNode(root.right);
    if (root.val > high) return dfsReturnNode(root.left);

    root.left = dfsReturnNode(root.left);
    root.right = dfsReturnNode(root.right);
    return root;
  };

  return dfsReturnNode(root);
};
```

## 二叉搜索树中的搜索

```js
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
let searchBST = (root, val) => {
  if (root == null || root.val == val) return root;

  //not equal
  if (root.val > val) {
    //go to search left
    return searchBST(root.left, val);
  }
  if (root.val < val) {
    return searchBST(root.right, val);
  }
};
```
