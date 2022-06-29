var removeDuplicates = function (nums) {
  let l = 0,
    r = 1;
  for (; r < nums.length; r++) {
    if (nums[l] !== nums[r]) {
      l++;
      nums[l] = nums[r];
    }
  }
  return l + 1;
};

let nums = [1, 1, 2];
console.log(removeDuplicates(nums));

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2));
