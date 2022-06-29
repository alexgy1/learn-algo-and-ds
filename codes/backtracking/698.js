// TC (K*2^n) 选当前元素 和不选当前元素

//对比之前往桶里放的时间复杂度是 k^n

var canPartitionKSubsets = function (nums, k) {
  let sum = nums.reduce((p, c) => {
    p += c;
    return p;
  }, 0);
  let target = sum / k;
  let used = Array(nums.length).fill(false);

  /**
   *
   * @param {*} i 当前处理到的下标
   * @param {*} k 还有多少k剩余
   * @param {*} subsetSum 子集的和
   * @return {boolean} 是否可以分成若干个
   */
  let backtrack = (i, k, subsetSum) => {
    if (k == 0) {
      return true;
    }
    if (subsetSum == target) {
      return backtrack(0, k - 1, 0);
    }

    for (let j = i; j < nums.length; j++) {
      if (used[j] || subsetSum + nums[j] > target) continue; //剪枝
      used[j] = true; //这里包含回溯
      //这时候要处理j+1 项了 k只有在subsetSum == target 才回减1
      if (backtrack(j + 1, k, subsetSum + nums[j])) {
        //subsetSum + nums[j] 包含回溯
        return true;
      }
      used[j] = false;
    }
    return false;
  };

  return backtrack(0, k, 0);
};
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
console.log(canPartitionKSubsets([1, 2, 3, 4], 3));
