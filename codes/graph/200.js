/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  //todo
  let visit = new Map();
  let row = grid.length,
    col = grid[0].length;
  let dfs = (r, c, visit) => {
    let key = r + "," + c;
    if (r < 0 || c < 0 || r === row || c === col || visit.has(key)) {
      return;
    }

    visit.set(key, true);

    dfs(r + 1, c, visit);
    dfs(r - 1, c, visit);
    dfs(r, c + 1, visit);
    dfs(r, c - 1, visit);

    visit.delete(key);
  };

  let count = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      let key = r + "," + c;
      if (grid[r][c] == 1 && !visit.has(key)) {
        dfs(r, c, visit);
        count++;
      }
    }
  }
  return count;
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
