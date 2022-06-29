/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  return Math.max(
    nums[0],
    helper(nums.slice(1)),
    helper(nums.slice(0, nums.length - 1))
  );
};
var helper = function (nums) {
  let rob1 = (rob2 = 0);

  for (let n of nums) {
    let newRob = Math.max(rob1 + n, rob2);
    rob1 = rob2;
    rob2 = newRob;
  }

  return rob2;
};
