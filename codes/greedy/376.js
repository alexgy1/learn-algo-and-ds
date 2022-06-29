/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length; //这里要返回length
  let preDiff = 0,
    curDiff = 0,
    count = 1; //默认右边有一个峰值

  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i];

    if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
      count++;

      //update preDiff
      preDiff = curDiff;
    }
  }
  return count;
};
