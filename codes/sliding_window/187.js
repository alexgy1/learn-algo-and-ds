/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) return [];

  let seen = new Set();
  let res = new Set();

  for (let l = 0; l < s.length - 9; l++) {
    let cur = s.substring(l, l + 10);
    if (seen.has(cur)) {
      res.add(cur);
    }
    seen.add(cur);
  }

  return [...res];
};
