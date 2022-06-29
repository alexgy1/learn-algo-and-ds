/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let rowZero = false;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0;

        if (r > 0) {
          matrix[r][0] = 0;
        } else {
          rowZero = true;
        }
      }
    }
  }

  //skip first row and col
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  //check matrix[0][0]
  if (matrix[0][0] === 0) {
    for (let r = 0; r < rows; r++) {
      matrix[r][0] = 0;
    }
  }

  if (rowZero) {
    for (let c = 0; c < cols; c++) {
      matrix[0][c] = 0;
    }
  }
};
