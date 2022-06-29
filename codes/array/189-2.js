var rotate = function (nums, k) {
  // [1,2,3,4,5]

  // [1,2,3] [4,5]
  // [5,4] [3,2,1]
  // [4,5] [1,2,3]
  let len = nums.length;
  k = k % len;
  let l = 0,
    r = len - 1;
  while (l < r) {
    [nums[r], nums[l]] = [nums[l], nums[r]];
    l++;
    r--;
  }

  l = 0, r= k -1 
  while (l < r) {
    [nums[r], nums[l]] = [nums[l], nums[r]];
    l++;
    r--;
  }

  l = k , r = len -1 
  while (l < r) {
    [nums[r], nums[l]] = [nums[l], nums[r]];
    l++;
    r--;
  }

};
