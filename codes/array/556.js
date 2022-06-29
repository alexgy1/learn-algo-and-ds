/**
 * @param {number[][]} mat
 * @param {number} r1
 * @param {number} c1
 * @return {number[][]}
 */
var matrixReshape = function (mat, r1, c1) {
  let [col, row] = [mat[0].length, mat.length];

  if (col * row !== r1 * c1) {
    return mat;
  }

  //get matrix with r1 * c1
  let newMat = Array(r1)
    .fill(0)
    .map(() => Array(c1).fill(0));
  console.log(newMat);
  let [r, c] = [0, 0];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      newMat[r][c] = mat[i][j];
      //increase row and col but col first
      c++;
      if (c === c1) {
        r++;
        c = 0;
      }
    }
  }
  return newMat;
};
let mat = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;
console.log(matrixReshape(mat, r, c));
