## 278 first bad version

## 二分查找

> 什么时候想到可以使用二分查找？ sorted array
> 数组内的元素是否有重复？ 一般情况是没有重复的情况
> 有重复的怎么处理？继续二分 leetcode 34
> 如果二分查找找不到怎么处理？ 左边的节点就是结果 leetcoe 35

- 模版

```js
var binarySearch = function (num) {
  let l = 0;
  r = num;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    //condition

    if (满足条件 == num) {
      return true or mid
    } else if (res > num) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  //r < l
  return -1 or l
};
```

## [367](https://leetcode.com/problems/valid-perfect-square/) [✓]

## [374](https://leetcode.com/problems/guess-number-higher-or-lower/) [✓]

## [658](https://leetcode.com/problems/find-k-closest-elements/) [✓]

- 题目不好读懂

## [981](https://leetcode.com/problems/time-based-key-value-store/) [✓]

- 设计数据结构

## [153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) [✓]

- 没有旋转（和原来数组一样的情况 直接返回 nums[0]）和
- 已经旋转的情况
  - 找中点 再决定往左找还是往右找 旋转的一个特点就是 右边的 比左边最大的还大
  - 找到中点 就更新结果 取最小 直到左右指针相遇后离开

## [74](https://leetcode.com/problems/search-a-2d-matrix/) [✓]

## [1898](https://leetcode.com/problems/maximum-number-of-removable-characters/)

- 难懂 没做出来

## [875](https://leetcode.com/problems/koko-eating-bananas/) [✓]

- 对 食物从 1 到最大 二分 找到中间值计算所有都吃完的耗时， 耗时和 h 比较。 大的话， 增加左边， 小的话减小右边 每次小于等于的时候更新结果 开始结果给最大 最后返回结果

## [34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) [✓]

- 找到中点 再继续找 左边和右边 两次二分查找

## [4](https://leetcode.com/problems/median-of-two-sorted-arrays/)

- hard todo

## [35](https://leetcode.com/problems/search-insert-position/) [✓]

## [33](https://leetcode.com/problems/search-in-rotated-sorted-array/) [✓]

- 有点难 需要再次回顾



- 704