## 区间不变量

> 可以使用二分搜索的前提是， 有序且没有重复的元素

l= 0
r = nums.length-1

变化
l= mid + 1
r = mid -1

结束条件 l<=r

变化结束后： l > r

```js
var bs = (nums, target) => {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floow((r - l) / 2);
    if (target == nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      //search left
      mid = r - 1;
    } else {
      mid = l + 1;
    }
  }
  //end r < l
  //没找到
  return -1;
};
```

## 有序 并且有重复元素的情况

