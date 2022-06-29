/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let map = {};

  for (let s1 of s) {
    map[s1] = map[s1] + 1 || 1;
  }

  for (let s2 of t) {
    if (map[s2]) {
      map[s2]--;
    } else {
      map[s2] = 1;
    }
  }

  for (let key in map) {
    if (map[key] == 1) {
      return key;
    }
  }
  return -1;
};

let s = 'aa',
  t = 'aaa';
console.log(findTheDifference(s, t));
