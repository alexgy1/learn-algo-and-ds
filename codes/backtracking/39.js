//组合 元素可以重复使用

const combineSum2 = (candidates, target) => {
  let sum = 0;
  let res = [];
  let path = [];
  let backtrack = (start) => {
    if (sum > target) return;

    if (sum == target) {
      return res.push(path.slice());
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum += candidates[i];
      backtrack(i);
      sum -= candidates[i];
      path.pop();
    }
  };

  backtrack(0);
  return res;
};

console.log(combineSum2([2, 3, 6, 7], 7));
