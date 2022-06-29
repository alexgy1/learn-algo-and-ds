var numDecodings = function (str) {
  //当前位 和后一位
  let dp = { [str.length]: 1 };
  let nums = [0, 1, 2, 3, 4, 5, 6];
  let n = str.length;
  for (let i = n - 1; i--; i >= 0) {
    if (str[i] == "0") {
      dp[i] = 0;
    } else {
      dp[i] = dp[i + 1];
    }

    if (
      i + 1 < n &&
      (str[i] == "1" || (str[i] == "2" && nums.includes(str[i + 1])))
    ) {
      dp[i] += dp[i + 2];
    }
  }

  return dp[0];
};
