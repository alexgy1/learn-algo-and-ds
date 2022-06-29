/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = (nums) => nums.reduce((p, c) => (p += c), 0);
  let target = sum(nums);

  if (target % 2 !== 0) return false;

  let dp = new Set();
  dp.add(0);
  let halfTarget = target >> 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    let nextDp = new Set();
    for (let t in dp) {
      if (t + nums[i] === halfTarget) return true;
      nextDp.add(t + nums[i]);
      nextDp.add(t);
    }
    dp = nextDp;
  }
  console.log(dp, "dp");
  return dp.has(halfTarget);
};

console.log(canPartition([1, 2, 4, 1]));
