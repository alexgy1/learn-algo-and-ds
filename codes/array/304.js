/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  let [row, col] = [matrix.length, matrix[0].length];
  let preSum = new Array(row + 1).fill().map(() => new Array(col + 1).fill(0));

  for (let i = 0; i < row; i++) {
    let prefix = 0;
    for (let j = 0; j < col; j++) {
      prefix += matrix[i][j];
      let above = preSum[i][j + 1];
      preSum[i + 1][j + 1] = prefix + above;
    }
  }
  this.preSum = preSum;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let [r1, c1, r2, c2] = [row1 + 1, col1 + 1, row2 + 1, col2 + 1];

  let bottomRight = this.preSum[r2][c2],
    above = this.preSum[r1 - 1][c2],
    left = this.preSum[r2][c1 - 1],
    topLeft = this.preSum[r1 - 1][c1 - 1];
  return bottomRight - above - left + topLeft;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

var matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];

var obj = new NumMatrix(matrix);

console.log(obj);
