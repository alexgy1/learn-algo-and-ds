let arr = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [4, 5, 6],
];

function zip(matrix) {
  let [row, col] = [matrix.length, matrix[0].length];

  let c = 0,
    res = [];
  while (c < col) {
    let temp = [];
    for (let row of arr) {
      temp.push(row[c]);
    }
    res[c] = temp;
    c++;
  }
  return res;
}

console.log(zip(arr));
