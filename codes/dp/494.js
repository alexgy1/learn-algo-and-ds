var findTargetSumWays = function (nums, target) {
  let dp = {}; // (index, total)

  let backtrack = (i, total) => {
    if (i == nums.length) {
      if (total == target) {
        return 1;
      } else {
        return 0;
      }
    }
    let key = i + "," + total;
    if (dp[key]) return dp[key];

    dp[key] =
      backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i]);

    return dp[key];
  };

  return backtrack(0,0)
};
