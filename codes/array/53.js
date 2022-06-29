/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curSum = 0;
  let maxSub = nums[0];

  for (let r = 0; r < nums.length; r++) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += nums[i];
    maxSub = Math.max(maxSub, curSum);
  }

  return maxSub;
};
