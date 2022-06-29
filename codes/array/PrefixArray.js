class PrefixArray {
  constructor() {
    this.preSum = [];
  }

  NumArray(nums) {
    let preSum = Array(nums.length + 1); //保证preSum的长度比原数组多1
    preSum[0] = 0; //第一个位置初始化为零
    for (let i = 1; i < preSum.length; i++) {
      //preSum的前一项 + nums前一项
      preSum[i] = preSum[i - 1] + nums[i - 1];
    }

    this.preSum = preSum;
  }

  sumRange(l, r) {
    //求l 到 r的区间的和 r+1 - l 就是这个区间的和 因为之前已经构造好了
    return this.preSum[r + 1] - this.preSum[l];
  }
}

let pr = new PrefixArray();
let arr = [3, 5, 2, -2, 4, 1];
pr.NumArray(arr);

console.log(pr.preSum);

console.log(pr.sumRange(0, 2));
console.log(pr.sumRange(2, 3));
