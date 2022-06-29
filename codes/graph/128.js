/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  console.log(set, "set ");
  let longest = 0;

  for (let n of nums) {
    //check if its the start of a sequence
    if (!numSet.has(n - 1)) {
      let length = 0;
      while (numSet.has(n + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};
