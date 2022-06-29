/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let count = {},
    res = 0,
    l = 0;

  for (let r = 0; r < s.length; r++) {
    count[s[r]] = count[s[r]] == undefined ? 1 : count[s[r]] + 1;
    let windowSize = r - l + 1;
    let maxFrequency = Math.max(...Object.values(count));
    console.log("count size maxFreq", count, windowSize, maxFrequency);
    while (windowSize - maxFrequency > k) {
      if (!count[s[l]]) break;
      count[s[l]] -= 1;
      l++;
      console.log("count l", count, l);
    }
    //window is valid
    res = Math.max(r - l + 1, res);
    console.log("res", res);
  }
  return res;
};
// let s = "ABAB",
//   k = 2;
// console.log(characterReplacement(s, k));

let s1 = "AABABBA",
  k1 = 1;
console.log(characterReplacement(s1, k1));
