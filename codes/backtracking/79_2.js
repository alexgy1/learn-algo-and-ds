/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let row = board.length,
    col = board[0].length;

  let path = new Set();

  let backtrack = (r, c, i) => {
    if (i == word.length) {
      return true;
    }
    //边界条件
    if (r < 0 || c < 0 || r >= row || c >= col || word[i] !== board[r][c])
      return false;

    let pos = r + "," + c;
    if (path.has(pos)) return false;
    path.add(pos);
    let res =
      backtrack(r + 1, c, i + 1) ||
      backtrack(r - 1, c, i + 1) ||
      backtrack(r, c + 1, i + 1) ||
      backtrack(r, c - 1, i + 1);
    path.delete(pos);

    return res;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (backtrack(i, j, 0)) return true; //i =0 每次都从头开始搜索 超出边界 或者 已经处理了 或者 当前字符不是要找的字符 不继续找
    }
  }
  return false;
};
