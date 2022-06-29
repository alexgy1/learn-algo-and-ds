var threeSum = function (nums, target) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let l = i + 1, //l从i的下一项开始
      r = nums.length - 1;
    while (l < r) {
      //l r不能相等 因为是三个不同的组合
      let threeSum = nums[i] + nums[l] + nums[r];

      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        //equal
        res.push([nums[i], nums[l], nums[r]]);

        //change pointer
        l++;
        //[-2-2, 0,0,2,2]x
        while (nums[l] == nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};
