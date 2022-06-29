/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  //     1: 1     3:2
  //     2 : 1     6:2
  //     3:1      7:1
  //     5:2       5:1
  //     4:3      8:1
  //              9:2
  //             4:1

  //     4578

  //     12 10

  let success = new Map(),
    fail = new Map();

  for (let [win, lose] of matches) {
    success.set(win, (success.get(win) || 0) + 1);
    fail.set(lose, (fail.get(lose) || 0) + 1);
  }

  let loseArr = [];
  for (let [key, val] of fail) {
    if (val === 1) {
      loseArr.push(key);
    }
  }

  let successArr = [];
  for (let [key, val] of success) {
    !fail.has(key) && successArr.push(key);
  }

  const incre = (a, b) => a - b;
  loseArr = loseArr.sort(incre);
  successArr = successArr.sort(incre);
  return [successArr, loseArr];
};

const matches = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];

const matches2 = [
  [2, 3],
  [1, 3],
  [5, 4],
  [6, 4],
];
findWinners(matches);
findWinners(matches2);
