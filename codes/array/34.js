/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = binarySearch(nums, true);
  let r = binarySearch(nums, false);

  return [l, r];
};

var binarySearch = (nums, target, searchLeft) => {
  let l = 0,
    r = nums.length - 1;
  let res = -1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (target == nums[m]) {
      res = mid;
      if (searchLeft) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else if (target > nums[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return res;
};
