var subarraySumHashMap = function (nums, k) {
  let preSum = new Map();
  preSum.set(0, 1);

  let curSum = 0;
  let res = 0;
  for (let n of nums) {
    curSum += n;

    let diff = curSum - k;
    res += preSum.get(diff) || 0;

    preSum.set(curSum, (preSum.get(curSum) || 0) + 1);
  }
  return res;
};

let nums = [1, 1, 1],
  k = 2;
console.log(subarraySumHashMap(nums, k));
