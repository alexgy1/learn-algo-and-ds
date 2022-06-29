const lengthOfLongestSubString = (s) => {
  let l = 0,
    res = 0,
    seen = new Set();

  for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
      seen.delete(s[l]);
      l++;
    }
    seen.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
};

console.log(lengthOfLongestSubString("abcabcbb"));

// abcabcbb
// r0
// l0
// r1
// l0
// r2 l0 set abc
// r3 l1 set bc
