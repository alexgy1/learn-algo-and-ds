var permuteUnique = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let result = [];
  let path = [];

  function backtracing(used) {
    if (path.length === nums.length) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        backtracing(used);
        path.pop();
        used[i] = false;
      }
    }
  }
  backtracing([]);
  return result;
};
