/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let rows = board.length,
    cols = board[0].length;
  let path = new Set();

  var dfs = function (r, c, i) {
    if (i == word.length) {
      return true;
    }
    //upper bound
    if (r < 0 || c < 0 || r >= rows || c >= cols || word[i] !== board[r][c]) {
      return false;
    }
    let key = r + "," + c;
    if (path.has(key)) return false;

    path.add(key);
    let res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    path.delete(key);

    return res;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
