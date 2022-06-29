//todo 剪枝 达到优化的目的
const combine = (n, k) => {
  let res = [];
  let path = [];
  let backtrack = (start) => {
    if (path.length == k) {
      res.push(path.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      //   console.log("n - path.length + 1", n - path.length + 1);
      path.push(i);
      //   console.log("path before", path);
      backtrack(i + 1); //i+1 保证只处理后面的 因为 组合来说 21 12 是一样的
      path.pop();
      //   console.log("path after", path);
    }
  };
  backtrack(1);
  return res;
};

console.log(combine(4, 2));
