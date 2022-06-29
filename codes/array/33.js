var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (target == nums[mid]) return mid;

    if (nums[mid] > nums[l]) {
      //search right
      //[mid, r] 往那搜素？
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      //right sorted portion
      if (target < nums[mid] || target > nums[r]) {
        //search left
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return -1;
};
