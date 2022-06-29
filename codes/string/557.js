/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(/\s+/g);
  return arr.map((a) => reverse(a)).join(' ');
};

var reverse = (s) => {
  let arr = s.split('');
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    [arr[r], arr[l]] = [arr[l], arr[r]];
    l++;
    r--;
  }
  return arr.join('');
};

let s = "Let's take LeetCode contest";

console.log(reverseWords(s));
