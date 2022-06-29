---
title: 链表基础题目汇总
author: 前端关宇
date: "2022-03-01"
---

## 链表的分类

- 单链表
- 双向链表
- 环型链表

## 链表的常用技巧

- two pointer
  - 同向的快慢指针
  - 为什么要用双指针？ 因为可以实现空间复杂度为 O(1)
- dummy node
  - 返回 dummyNode.next
  - 为什么要用 dummy node? 因为可以避免

## 单个 单链表的操作：

> dummy node 的使用 可以简化链表的操作

1. 增
2. 删 （一个或多个）
3. 改 （先 find）
4. 查 （如何遍历）

## 5 反转单链表

- 思路 ： 双指针： 声明两个变量 pre =null cur = head ,然后 cur.next =pre 再更新 pre cur

```js
var reverseLL = function (head) {
  let pre = null,
    next = null,
    cur = head;

  while (cur) {
    next = cur.next; //save next
    cur.next = pre;

    //update pre and cur
    pre = cur;
    cur = next;
  }

  return pre;
};
```

- 递归实现

```js
//reverseList的作用就是将链表反转并且返回值是新的头节点
var reverseList = function (head) {
  //1 -> 2-> 3->4

  if (head == null || head.next == null) return head;
  let newHead = reverseList(head.next);

  //1 ->  A (null<- 2<- 3<-4 )
  head.next.next = head; // (A.next =A)
  //1 <-  A ( 2<- 3<-4 ) 1是head
  //null<-head
  head.next = null;

  return newHead;
};
```

## 扩展： 反转 a 到 b 区间的链表怎么做？ [a,b) 左开右闭

- 就是在上面反转链表的基础上改造一下即可， 因为反转链表相当于 head 到 null 这里要求 a 到 b
  改变的部分就是 cur=a 和 while 的判断条件

```js
// a,b 都是ListNode
function reversLLInAToB(a, b) {
  let pre = null,
    cur = a,
    next = null;

  while (cur !== b) {
    next = cur.next;
    cur.next = pre;

    pre = cur;
    cur = next;
  }

  return pre;
}
```

## 6 判断链表是否有环 (141)

```js

//只有一个个指针可以么？
function one(head){
    let fast = head
    while(fast){
       fast = fast.next
    }
}
链表有环的时候 就一直循环出不来了

所以要再加一个节点

为啥不是三倍的关系？


快指针是慢指针速度的二倍的实现：
// head : ListNode
var hasCycle = function(head) {
    let fast = slow = head

    while(fast && fast.next){
        slow = slow.next
        fast =fast.next.next

        if(slow == fast) return true
    }

    return false
};
```

## 7 找出单链表的环的位置？

思路 快慢指针 快是慢的二倍 ，判断是否有环

- 没有 不处理
- 有的话 让慢指针来到头节点位置，一次走一步，再次和快指针相遇，就是环的入口， 返回快或者慢指针

```js
function judgeEntry(head) {
  let slow = (fast = head);

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      break;
    }
  }
  //fast
  if (fast == null || fast.next == null) {
    return null; //fast走完了 说明没有环 不是break的情况
  }

  //fast不为空 有环
  slow = head; //慢指针来到头
  while (slow !== fast) {
    //两人没相遇
    slow = slow.next; //就一直走慢指针 一次走一步
    fast = fast.next; //快指针也要走？ 说明头到环的入口的距离 和环的周长相等
  }

  return slow;
}
```

## 8 找链表的中点

难点是不能直接得到链表的长度 n

- 思路 1：遍历一遍得到链表的长度 ， 再遍历一遍得到中点的位置 两次遍历 不好
- 思路 2：能不能一次遍历实现？ 快慢指针 慢指针一次走一步， 快指针一次走两步， 快指针指向 null 的时候， 慢指针来到中点的位置，返回慢指针

```js
var findMiddle = function (head) {
  let slow = (fast = head);

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
```

> 扩展

1. 中点的前一项
2. 中点的后一项

## 8 找到并且移除链表倒数第 k 个节点

```js
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy,
    cur = head;

  //cur 先走n步
  while (n > 0 && cur) {
    cur = cur.next;
    n--;
  }

  //cur走到末尾 prev来到 倒数第n的前一项
  //
  while (cur) {
    cur = cur.next;
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return dummy.next;
};
```

## 多个链表的操作 ：

一般使用 dummy node 的情况

- 1. merge two sorted lists
- 2. remove-nth-node-from-end-of-list
- 3. reoder-list
- 4. swap-nodes-in-pairs

## 9 两个链表的交点

假设链表 l1 长度大于 l2
[思路 Visualization of this solution:]:(https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/49785/Java-solution-without-knowing-the-difference-in-len!)

- p1 走一遍 l1 走到头之后，继续从 l2 开始走，
- p2 走一遍 l2 走到头之后， 继续从 l1 开始走，如果有交点，他们肯定可以相遇

```js
function main(l1, l2) {
  if (l1 == null || l2 == null) return false;
  let p1 = l1,
    p2 = l2;

  while (p1 !== p2) {
    p1 = l1.next == null ? l2 : l1.next; //l1走到头 换到l2
    p2 = l2.next == null ? l1 : l2.nex;
  }
  return true;
}
```

思路 2:

- 找到链表的 l1 l2 的长度， 找到他们的差值 diff= Lenl1-Lenl2

- 让一个指针先走 diff 步， 再让另一个指针和他同步同速度一直走，如果相交，肯定会相遇 两个指针相等（内存地址相等）

## 10 k 个一组合并链表(leetcode 23)

-思路 1： N : LogK merge sort 并且使用合并两个链表

- 思路 2 ： 怎么每次找到最小的元素？ min heap

## 11 合并两个有序链表（leetcode 21）

思路： 链表长度相等的时候， 比较值，cur.next = 值比较小的节点， 移动值比较小的节点（l1 or l2） 比较完以后， 移动 cur : cur = cur.next
,都比较完以后， cur.next = l1 || l2 意思是， l1 或者 l2 有剩余就把剩余的追加到 cur 尾部

```js
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let dummy = new ListNode(-1);
  let cur = dummy;

  //l1 l2 都不为空
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  //处理l1 l2 长度不等的情况 谁剩下就把谁追加到cur尾部
  cur.next = l1 || l2;

  return dummy.next;
};
```

## 11 merge sorted array

思路 剩下后面的 n 项没有插入， 因为要最后的数组是升序的 ，最后的肯定是租大的所以从后往前，找最大的， 次大的，依次从后往前插入， 直到 n=0 ， 前面 nums1 以及排好序了， 整体就处理完了。

```js
var merge = function (nums1, m, nums2, n) {
  let insertedIndex = m + n - 1;
  m -= 1;
  n -= 1;
  while (n >= 0) {
    //从后往前 依次往nums1插入当前最大的值
    let nowMaxVal = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    nums1[insertedIndex--] = nowMaxVal;
  }
};
```

## 13 add to numbers(letcode 2)

思路： dummy node 的使用， 以及 carry 进位的处理 超过 10 就 模 10 取到对应的个位， 然后再判断剩下的 carry 是否等于 0 ， 不等于 0 的情况并且 l1 l2 都为空的情况 还要追加这个值到链表尾部

```js
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(-1); //负责外交 保证dummy.next 始终返回头节点
  let p = dummy; //负责具体做事
  let carry = 0;
  let sum = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum = sum % 10; //取个位
    }

    //add new node to p
    p.next = new ListNode(sum);

    //恢复状态
    sum = carry;
    carry = 0;

    p = p.next;
  }

  return dummy.next;
};
```

14 reoder list(leetcode 143) 中等 boss

> 这道题要对链表怎么找中点，怎么逆序，怎么断开链表，怎么交叉合并链表掌握，才可以做出来

思路 :
1 找到链表的中点 ， 中点的 next 作为后一半的开头

2 逆序后一半，并且 断开前一半 middle.next = null

3 将前一半和逆序好的后一半， 交叉链接起来， 返回前一半的 head

```js
var reorderList = function (head) {
  //1 find middle
  let slow = head,
    fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let second = slow.next;
  slow.next = null; //change one linked list to two

  //2 reverse second half  prev is the head of it
  let prev = null;
  while (second) {
    let temp = second.next;
    second.next = prev;

    prev = second;
    second = temp;
  }
  console.log("prev second", prev, second);

  //3 merge two halfs
  let first = head,
    sec = prev;
  //sec is shorter
  while (sec) {
    let temp1 = first.next,
      temp2 = sec.next;

    //merge them
    first.next = sec;
    sec.next = temp1;

    first = temp1;
    sec = temp2;
  }
};
```

## leetcode 24 Swap Nodes in Pairs

- Iteratively

```js
function swapPairs(head) {}
```

- recursive

```js
function swapPairs(head) {
  if (head == null || head.next == null) return head;

  let v1 = head,
    v2 = head.next,
    v3 = v2.next;

  v2.next = v1;
  v1.next = swapPairs(v3);
  return v2;
}
```

## leetcode 25 Reverse Nodes in K-Group

- todo

## leetccode 203 remove Linked List Elements

```js
var removeElements = function (head, val) {
  //删除需要dummy node
  //pre cur pre 是cur的前一个
  // cur.val == val pre.next = cur.next //不更新pre 更新pre的next 为cur
  //cur.val !== val pre = cur //更新pre 为cur

  let dummy = new ListNode(-1),
    prev = dummy,
    cur = head;

  dummy.next = head; //要指向head

  while (cur) {
    let next = cur.next;

    //判断
    if (cur.val == val) {
      prev.next = next;
    } else {
      prev = cur;
    }

    cur = next; //每次都更新cur
  }

  return dummy.next;
};
```

## leetcode 234 判断链表是否是回文

思路： 两个指针， 找到中点（奇偶的情况， 始终让 右边小）， 然后从中点以后一个 逆序， 然后比较前一半和逆序后的另一半

```js
var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;
  let slow = (fast = head);

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast !== null) {
    // odd nodes: let right half smaller//始终让 右边小 的实现
    slow = slow.next;
  }

  //slow是后一半 并且是较小的长度 12321   12就是slow 再跟fast  123比较
  slow = reverseLL(slow);
  fast = head;

  //slow is shorter
  while (slow !== null) {
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }

  return true;
};
```
