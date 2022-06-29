/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = (nums) => nums.reduce((p, c) => (p += c), 0);
  let target = sum(nums);
  if (target % 2 !== 0) return false;
  let cache = {};
  return doesSubsetWithTargetExists(target >> 1, 0, nums, cache);
};

var doesSubsetWithTargetExists = function (target, i, nums, cache) {
  if (target === 0) return true;
  if (target < 0 || i >= nums.length) return false;

  let includingIth = doesSubsetWithTargetExists(
    target - nums[i],
    i + 1,
    nums,
    cache
  );
  let excludingIth = doesSubsetWithTargetExists(target, i + 1, nums, cache);
  cache[i] = includingIth || excludingIth;
  return includingIth || excludingIth;
};

let nums = [1, 5, 11, 5];
console.log(canPartition(nums));
let nums1 = [1, 5, 10, 5, 1];
console.log(canPartition(nums1));
let nums2 = [1, 4];
console.log(canPartition(nums2));
let nums3 = [1, 5, 9, 5, 1];
console.log(canPartition(nums3));
