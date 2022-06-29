var subsets = function (nums) {
  let res = [];
  let path = [];

  let backtrack = (start) => {
    res.push(path.slice()); //yao slice

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };
  backtrack(0);
  return res;
};

console.log(subsets([1, 2, 3]));
