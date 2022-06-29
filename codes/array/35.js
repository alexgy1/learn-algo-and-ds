/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (target == nums[m]) {
      return m;
    } else if (target > nums[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  //这里为什么返回l 因为没有找到 所以就要往左边界插入 找一个数带入就可以看出来了 [1] 插入2  [3] 插入1
  return l;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
