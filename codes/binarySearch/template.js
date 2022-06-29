var binarySearch = function (arr, target) {
  let l = 0,
    r = arr.length - 1,
    res = -1,
    t = target;

  while (l <= r) {
    let mid = (l + r) >> 1;

    let val = arr[mid];
    if (val === t) {
      return mid;
    } else if (val > t) {
      //search left
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};
