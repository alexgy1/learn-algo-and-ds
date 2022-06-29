var addDigits = function (num) {
  if (num < 10) return num;

  let sum = 0;

  while (num !== 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  //继续调用
  return addDigits(sum);
};

let num = 38;
addDigits(num);
