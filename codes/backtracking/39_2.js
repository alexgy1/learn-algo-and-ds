var combinationSum = function (candidates, target) {
  let res = [];

  let dfs = (i, cur, total) => {
    if (total == target) {
      res.push(cur.slice());
      return;
    }
    if (i >= candidates.length || total > target) return;

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]); //选这个元素
    cur.pop();

    dfs(i + 1, cur, total); //不选这个元素
  };

  dfs(0, [], 0);

  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7)); //[ [ 2, 2, 3 ], [ 7 ] ]
console.log(combinationSum([2, 3, 5], 8)); //[ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ] ]
