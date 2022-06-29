var wordBreak = function (str, wordDict) {
  let len = str.length;
  let dp = Array(len + 1).fill(false);
  dp[len] = true; //从后往前推

  for (let i = len - 1; i >= 0; i--) {
    for (let w of wordDict) {
      let end = i + w.length;

      if (i + w.length <= s.length && s.substring(i, end) == w) {
        dp[i] = dp[end];
      }
      if (dp[i]) {
        break;
      }
    }
  }
  return dp[0];
};

let s = "leetcode",
  wordDict = ["leet", "code"];

console.log(wordBreak(s, wordDict));
