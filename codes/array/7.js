/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let min = -Math.pow(2, 31);
  let max = Math.pow(2, 31) - 1;

  let res = 0;
  while (x) {
    let digit = x % 10;
    console.log("digit x", digit, x);
    x = Math.floor(x / 10);

    // if(res > max /10 || res == max /10  &&  digit >= max %10 ){
    //     return 0
    // }
    // if(res < min /10 || res == min/10 && digit <= min %10 ){
    //     return 0
    // }

    res += res * 10 + digit;
    console.log("res", res);
  }
  return res;
};

reverse(123);

console.log(123 % 10 , 123 /10 )
console.log(12 % 10 , 12/10)
console.log(1 % 10 , 1/10)