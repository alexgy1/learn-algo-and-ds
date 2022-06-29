/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    res = 0;

  let map = new Map(); // s : index 如何判断是否重复？用map s:出现的次数
  for (let r = 0; r < s.length; r++) {
    map.set(s[r], map.get(s[r]) || 0 + 1);
    while (map.get(s[r]) > 1) {
      console.log("map", map);
      map.set(s[r], map.get(s[r]) - 1);
      l++;
    }
    res = Math.max(r - l + 1, res);
  }

  return res;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
    