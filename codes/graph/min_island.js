//图的临接表的表示方式就是 岛屿
const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let size = exploreSize(grid, r, c, visited);
      if (size < minSize) {
        minSize = size;
      }
    }
  }
  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  const rowInBounds = r >= 0 && r < grid.length;
  const colInBounds = c >= 0 && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;

  if (grid[r][c] == "0") return 0;
  let pos = r + "," + c;
  if (visited.has(pos)) return false;

  visited.add(pos);
  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c + 1, visited);
  size += exploreSize(grid, r, c - 1, visited);

  return size;
};
const grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 1, 0, 0, 0],
];
console.log(minimumIsland(grid));
