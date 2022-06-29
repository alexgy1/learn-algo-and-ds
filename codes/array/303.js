/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let sumArr = new Array(nums.length + 1);
  sumArr[0] = 0;

  for (let i = 1; i < sumArr.length; i++) {
    sumArr[i] = sumArr[i - 1] + nums[i - 1];
  }
  this.preSum = sumArr;
};

NumArray.prototype.makePreSum = function (nums) {};
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right + 1] - this.preSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(0, 3));
