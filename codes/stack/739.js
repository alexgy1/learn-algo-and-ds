var dialyTemperatures = function (temperatures) {
  let len = temperatures.length;
  if (len == 0) return [];

  let res = Array(len).fill(0);
  let stack = [];
  for (let i = 0; i < len; i++) {
    let temp = temperatures[i];
    while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
      let [temp1, idx] = stack.pop();
      //   console.log("temp temp1 idx i-idx", temp, temp1, idx, i - idx);
      res[idx] = i - idx;
    }
    stack.push([temp, i]);
  }
  console.log("res", res);

  //   console.log("stack", stack);
};

dialyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
