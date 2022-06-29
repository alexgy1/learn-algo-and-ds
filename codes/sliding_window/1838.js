/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let l = (r = 0);
  let res = (total = 0);

  while (r < nums.length) {
    total += nums[r];
    //window is invalid
    while (nums[r] * (r - l + 1) > total + k) {
      total -= nums[l];
      l++;
    }
    // window is valid again
    res = Math.max(res, r - l + 1);
    console.log("res ", res, r, l);
    r++;
  }

  return res;
};
console.log(maxFrequency([1, 4, 8, 13], 5));
