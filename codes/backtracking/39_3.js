var combinationSum = function (candidates, target) {
  let res = [];
  let sum = 0;
  let path = [];

  let backtrack = (start) => {
    if (sum > target) return;
    if (sum == target) {
      res.push(path.slice());
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      let c = candidates[i];
      path.push(c);
      sum += c;
      backtrack(i);
      sum -= c;
      path.pop();
    }
  };

  backtrack(0);

  return res;
};

let candidates = [2, 3, 6, 7],
  target = 7;
console.log(combinationSum(candidates, target));
