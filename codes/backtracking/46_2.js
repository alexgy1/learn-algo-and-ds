var permute = (nums) => {
  let path = [];
  let res = [];
  let used = [];
  let backtrack = () => {
    //当长度达到 nums.length就是收集结果的时候 了
    if (path.length == nums.length) {
      res.push(path.slice());
      return;
    }

    //每次都从头开始选 上次是否使用过 是靠 used记录 使用过的就不会再次使用
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack();
      used[i] = false;
      path.pop();
    }
  };
  backtrack();
  return res;
};

console.log(permute([1, 2, 3]));
