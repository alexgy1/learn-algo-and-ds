## 岛屿问题

```js
var dfs = (grids, i, j, visited) => {
  let m = grid.length,
    n = grids[0].length;

  //判断边界
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }
  //判断是否访问过 避免重复访问 走回头路
  if (visited[i][j]) {
    return;
  }
  //标记访问过
  visited[i][j] = true;
  //处理四个或者八个方向
  //这里处理四个方向
  dfs(grids, i - 1, j, visited); //上
  dfs(grids, i + 1, j, visited); //下
  dfs(grids, i, j - 1, visited); //左
  dfs(grids, i, j + 1, visited); //右
};
```

## 上面也可以加上方向数组

```js
const dirs = [
  // 上 下 左右
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

var dfs = (grids, i, j, visited) => {
  let m = grid.length,
    n = grids[0].length;

  //判断边界
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }
  //判断是否访问过 避免重复访问 走回头路
  if (visited[i][j]) {
    return;
  }
  //标记访问过
  visited[i][j] = true;
  //处理四个或者八个方向
  //这里处理四个方向

  for (let [dx, dy] of dirs) {
    let i = i + dx,
      j = y + dy;
    dfs(grids, i, j, visited);
  }
};
```

## 200 count island
