/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  //     let arr = [
  //         [1,1,0],
  //         [1,1,0],
  //         [0,0,1]
  //     ]

  //     let arr2= [
  //         [1,0,0],
  //         [0,1,0],
  //         [0,0,1]]

  let row = isConnected.length,
    col = isConnected[0].length;
  let visited = new Set();
  let dfs = (r, c, visited) => {
    if (r < 0 || c < 0 || r === row || c === col) return;
    let directs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    let key = r + "," + c;

    if (visited.has(key)) return;

    visited.add(key);

    for (let [dr, dc] of directs) {
      let newR = r + dr,
        newC = c + dc;
      dfs(newR, newC, visited);
    }
  };
  let count = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      let key = r + "," + c;
      if (isConnected[r][c] === 1 && !visited.has(key)) {
        dfs(r, c, visited);
        count++;
      }
    }
  }
  return count;
};

let isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

console.log(findCircleNum(isConnected));
