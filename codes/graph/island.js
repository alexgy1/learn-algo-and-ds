//图的临接表的表示方式就是 岛屿
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited)) {
        count++;
      }
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInBounds = r >= 0 && r < grid.length;
  const colInBounds = c >= 0 && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[r][c] == "0") return false; //只处理陆地
  let pos = r + "," + c;
  if (visited.has(post)) return false;

  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);

  return true;
};
