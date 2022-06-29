/**Given an integer array nums, return the length of the longest strictly
 *  increasing subsequence.
 * 子串是连续的
 * 子序列是可以不连续的
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = Array(nums.length).fill(1);

  for(let i=0; i<nums.length; i++){
      for(let j=0; j<i; j++){
          dp[i] = Math.max(dp[j], dp[j+1])
      }
  }
};
