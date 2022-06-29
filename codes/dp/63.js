var uniquePathsWithObstacles = function (obstacleGrid) {
  let g = obstacleGrid;
  let row = g.length;
  let cols = g[0].length;
  let dp = Array(row)
    .fill()
    .map(() => Array(cols).fill(0));

  console.log("dp before", dp);
  for (let i = 0; i < row && g[i][0] == 0; i++) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < cols && g[0][j] == 0; j++) {
    dp[0][j] == 1;
  }

  console.log("dp", JSON.stringify(dp));
  //有障碍物的情况 怎么处理 它后面的怎么处理

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = g[i][j] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[row - 1][cols - 1];
};

let res = uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
console.log(res);
