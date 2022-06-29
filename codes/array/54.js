/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  //横向宽度不断减少1
  //纵向宽度不断减少1
  let [row, col] = [matrix.length, matrix[0].length];
  let res = [];
  let [l, r] = [0, col - 1];
  let [t, b] = [0, row - 1];
  let total = row * col;

  while (res.length < total) {
    //左闭 右开
    //上
    if (t <= b) {
      for (let i = l; i <= r; i++) {
        res.push(matrix[t][i]);
      }
      t++;
    }
    //右
    if (l <= r) {
      for (let i = t; i <= b; i++) {
        res.push(matrix[i][r]);
      }
      r--;
    }
    //下
    if (b >= t) {
      for (let i = r; i >= l; i--) {
        res.push(matrix[b][i]);
      }
      b--;
    }

    //左
    if (r >= l) {
      for (let i = b; i >= t; i--) {
        res.push(matrix[i][l]);
      }
      l++;
    }
  }

  return res;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix));
