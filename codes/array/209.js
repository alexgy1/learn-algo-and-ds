/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = 0,
    total = 0;
  let res = Infinity;

  for (let r = 0; r < nums.length; r++) {
    total += nums[r];
    while (total >= target) {
      let windowSize = r - l + 1;
      //   console.log("window size", windowSize);
      //   console.log("total", total);
      res = Math.min(res, windowSize);
      total -= nums[l];
      l++;
    }
  }

  return res == Infinity ? 0 : res;
};

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];

console.log(minSubArrayLen(target, nums));
