var numDecodings = function (str) {
  //todo
  let dp = {};
  dp[str.length] = 1;
  let nums = [0, 1, 2, 3, 4, 5, 6];
  let dfs = (i) => {
    if (i in dp) return dp[i];
    if (str[i] == "0") return 0;

    let res = dfs(i + 1);
    if (
      (i + 1 < str.length && str[i] == "1") ||
      (str[i] == "2" && nums.includes(str[i + 1]))
    ) {
      //10- 26
      res += dfs(i + 2);
    }
    dp[i] = res;

    return res;
  };

  return dfs(0);
};
