var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      //从后往前 符合条件就 一点点 将goal往前移动
      goal = i;
    }
  }
  return goal === 0;
};
