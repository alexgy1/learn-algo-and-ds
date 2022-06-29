/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/^[A-Za-z0-9]/g, "").toLowerCase();
  if (s.length <= 1) return true;

  let l = 0,
    r = s.length - 1;

  while (l <= r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};
