/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let set = new Set();
  let R = board.length,
    W = board[0].length;

  //是否has i 是单词的长度
  let dfs = (r, c, i) => {
    if (i === word.length) {
      return true;
    }

    if (r < 0 || c < 0 || r == R || c == W || board[r][c] !== word[i]) {
      return false;
    }
    let key = r + "," + c;
    if (set.has(key)) return false;

    set.add(key);

    let res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    set.delete(key); //回溯
    return res;
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < W; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
};
