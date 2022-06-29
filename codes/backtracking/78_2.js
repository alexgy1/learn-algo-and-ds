var subsets = (nums) => {
  let res = [];

  let subset = [];
  let dfs = (i) => {
    if (i >= nums.length) {
      console.log("subset i", i, subset);
      res.push(subset.slice());
      return;
    }

    //include i
    subset.push(nums[i]);
    dfs(i + 1);

    //not include i
    subset.pop();
    dfs(i + 1);
  };

  dfs(0);
  return res;
};

let nums = [1, 2, 3];

console.log(subsets(nums));
