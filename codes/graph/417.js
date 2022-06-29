/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let rows = heights.length,
    cols = heights[0].length;
  //two hash
  let pac = new Set(), // 值从高到低 才可以流动
    atl = new Set(); // 值 从低到高 才可以流动

  let dfs = (r, c, visit, prevHeight) => {
    let key = r + "," + c;
    if (
      visit.has(key) ||
      r < 0 ||
      c < 0 ||
      r == rows ||
      c === cols ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    //find a new cell save to map
    visit.add(key);

    //keep exploring
    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  };

  for (let c = 0; c < cols; c++) {
    //first row
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]); //prevHeight : heights[rows-1][c]
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }

  //get res from two maps

  let res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let key = r + "," + c;
      if (pac.has(key) && atl.has(key)) {
        res.push([r, c]);
      }
    }
  }
  return res;
};
