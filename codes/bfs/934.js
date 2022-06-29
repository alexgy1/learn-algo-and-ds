function shortestBridge(grid) {
  let N = grid.length;
  let direct = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let invalid = (r, c) => {
    return r < 0 || c < 0 || r === N || c === N;
  };

  let visited = new Set();
  let dfs = (r, c) => {
    let key = r + "," + c;
    if (invalid(r, c) || !grid[r][c] || visited.has(key)) return;

    visited.add(key);
    for (let [dr, dc] of direct) {
      dfs(r + dr, c + dc);
    }
  };

  let bfs = () => {
    let res = 0,
      q = [...visited];

    while (q.length > 0) {
      let len = q.length();
      //有多少层 就是最后的答案
      for (let i = 0; i < len; i++) {
        let [r, c] = q.shift().split(",");
        for (let [dr, dc] of direct) {
          let curR = r + dr,
            curC = c + dc,
            key = curR + "," + curC;
          if (invalid(curR, curC) || visited.has(key)) continue;
          //haven't been visited
          if (grid[curR][curC]) return res;
          q.push(key);
          visited.add(key);
        }
      }
      res++;
      console.log("res,", res);
    }
  };

  for (let i = 0; i < N.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        dfs(r, c); //fill visited set
        return bfs(); //return shortest bridge
      }
    }
  }

  console.log(visited);
}
let grid = [
  [0, 1, 0],
  [0, 0, 0], 
  [0, 0, 1],
];
shortestBridge(grid);
