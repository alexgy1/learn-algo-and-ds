/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let [rows, cols] = [grid.length - 1, grid[0].length - 1];
  let [time, fresh] = [0, 0];
  let q = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh += 1;
      if (grid[r][c] === 2) q.push([r, c]);
    }
  }

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  //多向 BFS
  while (q.length && fresh > 0) {
    let len = q.length;

    for (let i = 0; i < len; i++) {
      let [r, c] = q.shift();

      for (let [dr, dc] of dirs) {
        let [row, col] = [r + dr, c + dc];
        //if inboud and fresh orange make it rotting
        if (
          row < 0 ||
          row > rows ||
          col < 0 ||
          col > cols ||
          grid[row][col] !== 1
        )
          continue;

        grid[row][col] = 2;
        q.push([row, col]);
        fresh -= 1;
      }
    }
    //time +1
    time += 1;
    console.log(time, 'time');
  }

  return fresh === 0 ? time : -1;
};

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid));
