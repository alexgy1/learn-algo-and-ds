/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = bs(nums, target);
  let right = bs(nums, target, false);

  return [left, right];
};

var bs = (nums, target, lowerBound = true) => {
  let l = 0,
    r = nums.length - 1;

  let res = -1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      //在这个时候更新res
      res = mid;
      //找到以后 继续二分
      if (lowerBound) {
        //search to the left
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return res;
};
