/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let needMap = {};
  let window = {};
  let needSize = s1.length;
  for (let s of s1) {
    needMap[s] = needMap[s] == undefined ? 1 : needMap[s] + 1;
  }

  let l = 0,
    r = 0,
    valid = 0;
  while (r < s2.length) {
    let c = s2[r];
    r++;

    if (needMap[c]) {
      window[c] = window[c] == undefined ? 1 : window[c] + 1;
      if (window[c] == needMap[c]) {
        valid++;
      }
    }

    let finalSize = Object.keys(needMap).length;
    while (r - l >= needSize) {
      if (valid == finalSize) {
        return true;
      }
      let d = s2[l];
      l++;
      if (needMap[d]) {
        if (window[d] == needMap[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }

  return false;
};
let s1 = "abcdxabcde",
  s2 = "abcdeabcdx";
console.log(checkInclusion(s1, s2));
