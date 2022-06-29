/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let len = nums.length;
  let k = len - 1;

  let l = 0,
    r = k;
  let res = [];
  while (l <= r) {
    let left = nums[l] * nums[l],
      right = nums[r] * nums[r];
    if (left > right) {
      res[k] = left;
      l++;
    } else {
      res[k] = right;
      r--;
    }
    k--;
  }

  return res;
};

let nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));
