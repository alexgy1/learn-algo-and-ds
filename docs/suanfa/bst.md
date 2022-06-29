---
title: 二叉搜索树基础题目汇总
author: 前端关宇
date: "2022-03-01"
---

## 理论基础 没有这些概念 做题的时候可能会拿不准

## 什么是满二叉树？

k 是高度
节点总数等于 2^k-1 比如 k=3 节点总数为 7 （1 23 4567 ）

## 什么是完全二叉树？

- 是除了底层以外，其他层都是满的 ， 并且底层从左到右底部 是连续的 ， 断开的情况不是完全二叉树

- 堆就是一个完全二叉树（实现堆的时候， 就要明确什么是完全二叉树）
- 堆又分 MaxHeap or MinHeap
- 优先级队列可以用堆来实现
- 所以满二叉树一定是完全二叉树

## BST(二叉搜索树) 节点有顺序的，

- 左子树所有节点小于根节点的值
- 右子树所有节点大于根节点的值
- 子树本身也符和上面两点

## 平衡二叉搜索树

- 左右子树高度差不大于 1

## 存储方式

- 顺序存储 i\*2+1 的下标对应左孩子， i\*2+2 对应右孩子
- 链式存储

## 如何传入一个二叉树？

- 根节点指向左右子节点
- 传入根节点，就可以代表整个树

## 二叉树的遍历

> 两种方式

- 1 DFS
  -1.1 dfs inorder
  -1.2 dfs postorder
  -1.3 dfs preorder
- 2 BFS(也可以叫 level order traversal )

## Leetcode

- 104 max depth done post order 的使用
- 542 二叉树的直径 done 建立 在 104 基础上 diameter = Math.max(l + r, diameter) dfs post order 仅用来遍历使用 但需要返回 depth

- 144 二叉树的前序遍历 done stack 的使用
- 559 n arry max depth

## 如何升序打印 Bst?

```js
var inorder = (root){
  if(root == null) return
  //left root right
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}
```
