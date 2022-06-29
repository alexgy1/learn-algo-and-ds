/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  let res = nums[l];
  while (l <= r) {
    //sorted
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }

    //rotated

    let mid = l + Math.floor((r - l) / 2);

    res = Math.min(res, nums[mid]);
    //4 7 12
    if (nums[mid] >= nums[l]) {
      //search right
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
};

// 5671234

//7654321
//1234567
