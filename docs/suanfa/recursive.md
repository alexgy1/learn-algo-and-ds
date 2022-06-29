---
title: 什么是递归
author: 前端关宇
date: "2022-03-01"
---

## 1 什么是递归？它是如何工作的？

- Recursion is an approach to solving problems using a function that calls itself as a subroutine

- The trick is each time a recursive function calls itself, it reduces the given problem into subproblems, The recursion call continues until it reaches a point where the subproblem can be solved without further recursion

## 递归函数的构成？

- 1. A simple base case
- 2. A set of rules, also known as recurrence relation that reduces all other cases towards the base case

> Note that there could be multiple places where the function may call itself.

## 2 如何用递归解决一个问题？

> Print a string in reverse order

## 3 如何分析一个递归算法的时间和空间复杂度？

- todo

## 4 对于一个问题， 除了用递归， 还有更好的解决办法么？

- memorize
- dp

## 如何写好递归函数？

- 1. 递归函数的返回值和参数
  - 是否有返回值？
  - 参数不够，是否要新增？否则递归函数没法继续往下写
- 2. 终止条件
- 3. 单层递归的逻辑
