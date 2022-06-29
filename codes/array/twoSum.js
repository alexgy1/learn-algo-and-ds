let nums = [5, 3, 1, 6];

var main = function (nums, target) {
  nums.sort((a, b) => a - b);

  let l = 0,
    r = nums.length - 1;

  let res = [];
  while (l <= r) {
    let sum = nums[l] + nums[r];
    if (sum == target) {
      res.push([nums[l], nums[r]]);
      l++;
      while (l < r && nums[l] == nums[l - 1]) {
        l++;
      }
      r--;
    } else if (target > sum) {
      l++;
    } else {
      r--;
    }
  }
  return res;
};
console.log(main(nums, 9));

let nums1 = [1, 3, 1, 2, 2, 3],
  target1 = 4;
console.log(main(nums1, target1));
