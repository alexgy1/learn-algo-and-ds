/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0,
    r = num;

  while (l <= r) {
    let mid = (l + r) >> 1;

    let val = mid * mid;
    if (val === num) {
      return true;
    } else if (val > num) {
      //search left
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return false;
};
