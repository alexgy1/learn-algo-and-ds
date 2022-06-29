/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let l = (r = 0);
  let q = [];
  let res = [];
  while (r < nums.length) {
    //pop smaller values from queue
    while (q.length > 0 && nums[r] > nums[q[q.length - 1]]) {
      q.pop();
      //   console.log("r q is ", r, q);
    }
    q.push(r);

    //remove left val from window
    if (l > q[0]) {
      console.log("l q[0]", l, q[0]);
      q.shift();
    }

    if (r + 1 >= k) {
      res.push(nums[q[0]]);
      l++;
    //   console.log("l is ", l);
    }
    r += 1;
  }
  return res;
};
let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
