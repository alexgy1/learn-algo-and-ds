/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (N, target) {
  let l = 0,
    r = N.length - 1;

  while (l <= r) {
    let sum = N[l] + N[r];
    if (sum == target) {
      return [l + 1, r + 1]; //下标从1 开始 才可过
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }
};
