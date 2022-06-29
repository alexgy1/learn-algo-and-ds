/**
 *
 * @param {*} nums 要搜索的数组
 * @param {*} target 要搜索的目标值
 * @param {*} searchLeft 搜索重复元素的情况 目标值的左边界 默认是true false的情况搜索右边界
 */
function binarySearch(nums, target, searchLeft = true) {
  let l = 0,
    r = nums.length - 1;
  let res = -1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] == target) {
      res = mid;

      if (searchLeft) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
}

let nums = [2, 3, 4, 5, 5, 5, 6, 7, 8];

console.log(binarySearch(nums, 5, true)); //3
console.log(binarySearch(nums, 5, false)); //5
