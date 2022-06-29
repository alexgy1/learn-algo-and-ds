var minFlips = function (str) {
  let n = str.length;

  let s = str + str;
  let alt1 = "",
    alt2 = "";
  for (let i = 0; i < s.length; i++) {
    alt1 += i % 2 == 0 ? "0" : "1";
    alt2 += i % 2 == 0 ? "1" : "0";
  }
  let res = s.length;
  let diff1 = (diff2 = 0);

  let l = 0;
  for (let r = 0; r < s.length; r++) {
    if (s[r] !== alt1[r]) {
      diff1++;
    }
    if (s[r] != alt2[r]) {
      diff2++;
    }

    if (r - l + 1 > n) {
      if (s[l] !== alt1[l]) {
        diff1--;
      }
      if (s[l] !== alt2[l]) {
        diff2--;
      }
      l++;
    }

    if (r - l + 1 == n) {
      res = Math.min(diff1, diff2, res);
    }
  }
  return res;
};
