/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let [reversedX, curX] = [0, x];
  while (curX !== 0) {
    reversedX = reversedX * 10 + (curX % 10);
    curX = Math.floor(curX / 10);
  }
  return reversedX == x;
};

console.log(isPalindrome('123'));
console.log(isPalindrome('121'));
console.log(isPalindrome(-121));
