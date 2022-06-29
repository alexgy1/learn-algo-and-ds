/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let rows = mat.length,
    cols = mat[0].length;
  if (rows === 0 || cols === 0) return [];

  let res = [];
  let i = 0;
  let currRow = 0,
    currCol = 0;
  let up = true;

  while (currRow < rows && currCol < cols) {
    //going up
    if (up) {
      while (currRow > 0 && currCol < cols - 1) {
        res.push(mat[currRow][currCol]);
        currRow--;
        currCol++;
      }
      res.push(mat[currRow][currCol]);
      if (currCol === cols - 1) {
        currRow++;
      } else {
        currCol++;
      }
    } else {
      //going down
      while (currRow < rows - 1 && currCol > 0) {
        res.push(mat[currRow][currCol]);
        currRow++;
        currCol--;
      }
      res.push(mat[currRow][currCol]);

      if (currRow === rows - 1) {
        currCol++;
      } else {
        currRow++;
      }
    }
    up = !up;
  }
  return res;
};

let res = findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(res);
