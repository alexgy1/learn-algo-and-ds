/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  //1  ==2 || ==3  1
  // 1  count <2 || >3  =>   0
  // 0  count ==3       =>   1

  // Original  | New | State
  //  0        | 0   | 0
  //  1        | 0   | 1
  //  0        | 1   | 2
  //  1        | 1   | 3

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      let count = getNeighborsCount(r, c, board);
      if (board[r][c] === 1 && (count == 2 || count === 3)) {
        board[r][c] = 3;
      }
      if (board[r][c] === 0 && count === 3) {
        board[r][c] = 2;
      }
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === 1) {
        board[r][c] = 0;
      } else if (board[r][c] === 2 || board[r][c] === 3) {
        board[r][c] = 1;
      }
    }
  }
  console.log("borad final", board);
};

function isNotInBound(r, c, board) {
  if (c < 0 || r < 0 || r == board.length || c == board[0].length) return true;
  return false;
}

function getNeighborsCount(r, c, board) {
  let count = 0;
  let directs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  for (let [dr, dc] of directs) {
    let newR = dr + r,
      newC = c + dc;
    if (isNotInBound(newR, newC, board)) continue;
    if (board[newR][newC] === 1 || board[newR][newC] === 3) {
      count++;
    }
  }
  return count;
}
let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
gameOfLife(board);

let board2 = [
  [1, 1],
  [1, 0],
];
gameOfLife(board2);
