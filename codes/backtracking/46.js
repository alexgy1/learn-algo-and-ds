/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let path = [];

  let used = [];

  let backtrack = (used) => {
    if (path.length == nums.length) {
      res.push(path.slice());
      return;
    }

    for (let n of nums) {
      if (used[n]) continue;
      path.push(n);
      used[n] = true;
      backtrack(used);
      used[n] = false;
      path.pop();
    }
  };

  backtrack(used);
  return res;
};

console.log(permute([1, 2, 3]));
