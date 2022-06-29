var reverse = function (s, numRows) {
  if (numRows < 2) return s;

  let res = [];
  let row = 0;
  let goDown = true;

  for (let i = 0; i < numRows; i++) {
    res[i] = [];
  }

  for (let i = 0; i < s.length; i++) {
    res[row].push(s[i]);
    goDown ? row++ : row--;
    if (row === 0 || row === numRows - 1) {
      goDown = !goDown;
    }
  }
  //change matrix to string
  return res.reduce((pre, cur) => (pre += cur.join("")), "");
};

// p    A     I     R
// A  N   P  S  I  I
// H       L     G

console.log(reverse("PAHNAPLSIIGYIR", 3));
