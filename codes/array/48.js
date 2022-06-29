/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let row = matrix[0].length,
    col = matrix.length;

  for (let r = 0; r < row; r++) {
    //r+1 代表右上部分的所有元素
    for (let c = r + 1; c < col; c++) {
      // console.log(matrix[r][c]);
      // console.log(matrix[c][r]);
      let temp = matrix[r][c];
      matrix[r][c] = matrix[c][r];
      matrix[c][r] = temp;
    }
  }

  for (let r = 0; r < row; r++) {
    let row = matrix[r];
    reverse(row);
  }

  console.log(matrix, 'after');
};
const reverse = (row) => {
  let l = 0,
    r = row.length - 1;
  while (l < r) {
    [row[r], row[l]] = [row[l], row[r]];
    l++;
    r--;
  }
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// var res = [
//   [1, 4, 7], => [7,4,1]
//   [2, 5, 8], => [8,5,2]
//   [3, 6, 9], => [9,6,3]
// ];
//对角线 左下和右上调换 怎么做到
// 然后 再每一行逆序
console.log(rotate(matrix));
