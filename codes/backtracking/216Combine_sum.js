const combineSum = (k, n) => {
  let res = [];
  let path = [];
  let sum = 0;
  let backtrack = (start) => {
    if (sum > n) return;
    if (path.length == k && sum == n) {
      res.push(path.slice());
      return;
    }

    for (let i = start; i <= 9; i++) {
      path.push(i);
      sum += i;
      backtrack(i + 1);
      path.pop();
      sum -= i;
    }
  };
  backtrack(1);
  return res;
};

console.log(combineSum(3, 7));
console.log(combineSum(3, 9));
