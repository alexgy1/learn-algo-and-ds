var lengthOfLIS = function (nums) {
  let LIS = Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    //从后往前遍历 倒数第二位
    for (let j = i + 1; j < nums.length; j++) {
      //下一项比当前项目大
      if (nums[i] < nums[j]) {
        //LIS[i] 表示 到第i位 lis的个数是多少 最后一位是1 倒数第二位是1 + 最后一位比当前大？+1 ：自己
        LIS[i] = Math.max(LIS[i], LIS[j] + 1);
      }
    }
  }
  return Math.max(...LIS);
};
let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
