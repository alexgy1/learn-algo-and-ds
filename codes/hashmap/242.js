/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  //s t length equal
  let map = new Map();
  for (let s1 of s) {
    map.set(s1, (map.get(s1) || 0) + 1);
  }

  for (let s2 of t) {
    if (!map.has(s2)) {
      return false;
    } else {
      map.set(s2, map.get(s2) - 1);
    }
  }

  console.log("compare");
  for (let val of [...map.values()]) {
    if (val !== 0) return false;
  }
  return true;
};
let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
console.log(isAnagram("rat", "car"));
