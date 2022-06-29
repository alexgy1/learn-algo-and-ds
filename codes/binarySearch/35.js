/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (target == nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  //eg : [1,3,5,6]  2 < 3 2 > 1 选left
  return l;
};

// console.log(searchInsert([1, 3, 5, 6], 7)); //4
// console.log(searchInsert([1, 3, 5, 6], 5)); //2
// console.log(searchInsert([1, 3, 5, 6], 2)); //1

//this two test case can tell us why we use l <= r in while condition
// console.log(findIndex([2], 3)); //1
// console.log(findIndex([3], 2)); //0
