/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const numberRegex = /^\d+$/;
  let ans = [];
  if (s.legnth === 0) return ans;

  helper(s.split(""), ans, 0);

  return ans;

  function helper(arr, ans, i) {
    if (i === arr.length) {
      ans.push(arr.join(""));
      return;
    }
    let now = arr[i];

    if (!numberRegex.test(now)) {
      arr[i] = arr[i].toLowerCase();
      helper(arr, ans, i + 1);

      arr[i] = arr[i].toUpperCase();
      helper(arr, ans, i + 1);
    } else {
      helper(arr, ans, i + 1);
    }
  }
};

let s = "a1b2";
let s1 = "3z4";
console.log(letterCasePermutation(s));
console.log(letterCasePermutation(s1));
