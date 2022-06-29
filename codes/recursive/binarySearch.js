function binarySearch(A, l, r, x) {
  if (l > r) return -1;
  let mid = l + Math.floor((r - l) / 2);

  if (x == A[mid]) return mid;

  if (x < A[mid]) {
    //search left
    return binarySearch(A, l, mid - 1, x);
  }
  //search right
  return binarySearch(A, mid + 1, r, x);
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(nums, 0, nums.length - 1, 7));
console.log(binarySearch(nums, 0, nums.length - 1, 2));
console.log(binarySearch(nums, 0, nums.length - 1, 12));
