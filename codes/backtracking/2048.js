/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
  //return boolean
  const valid = (n) => {
    let map = new Array(10).fill(0);

    while (n > 1) {
      let rem = n % 10;
      map[rem]++;
      n = Math.floor(n / 10);
    }

    for (let i = 0; i < 10; i++) {
      if (map[i] > 0 && map[i] !== i) return false;
    }
    console.log("map", map);
    return true;
  };

  while (true) {
    n++;
    console.log("n", n);
    if (valid(n)) return n;
  }
  return 1;
};
let n = 1;
console.log(nextBeautifulNumber(1));
