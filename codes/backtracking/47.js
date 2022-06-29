/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [],
    path = [];

  let dfs = (used) => {
    if (path.length == nums.length) {
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        dfs(used);
        path.pop();
        used[i] = false;
      }
    }
  };

  dfs([]);

  return res;
};
