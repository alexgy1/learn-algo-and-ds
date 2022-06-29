/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0,
    res = Infinity,
    r = nums.length - 1;
  console.log(r, l, res);
  while (l <= r) {
    //sorted
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }

    //rotated
    let mid = l + Math.floor((r - l) / 2);
    //这里收集结果
    res = Math.min(nums[mid], res);

    if (nums[mid] >= nums[l]) {
      //search right
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return res;
};

console.log(findMin([1, 2, 3]));
console.log(findMin([3, 1, 2]));
console.log(findMin([[4, 5, 1, 2, 3]]));
