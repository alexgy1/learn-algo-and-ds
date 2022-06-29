/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  //gen an matrix n * n
  let matrix = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  let start = 1;
  let [l, r] = [0, n - 1];
  let [t, b] = [0, n - 1];

  while (start <= n * n) {
    //top
    if (t <= b) {
      for (let i = l; i <= r; i++) {
        matrix[t][i] = start++;
      }
      t++;
    }

    //right
    if (l <= r) {
      for (let i = t; i <= b; i++) {
        matrix[i][r] = start++;
      }
      r--;
    }

    //bottom
    if (t <= b) {
      for (let i = r; i >= l; i--) {
        matrix[b][i] = start++;
      }
      b--;
    }

    //left
    if (l <= r) {
      for (let i = b; i >= t; i--) {
        matrix[i][l] = start++;
      }
      l++;
    }
  }
  return matrix;
};
let res = generateMatrix(5);
console.log(res);

