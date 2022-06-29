/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0,
    lastCount = 0;
  for (let n of nums) {
    if (n === 1) {
      count++;
      lastCount = Math.max(count, lastCount);
    } else {
      count = 0;
    }
  }

  return lastCount;
};
