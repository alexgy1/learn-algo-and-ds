const isHappy = (n) => {
  let visit = new Set();

  while (!visit.has(n)) {
    visit.add(n);

    n = sumOfSquares(n);

    if (n == 1) return true;
  }
  return false;
};

let sumOfSquares = (n) => {
  let output = 0;

  while (n) {
    let digit = n % 10;
    digit = digit ** 2;
    output += digit;
    n = n / 10;
  }
  return output;    
};
