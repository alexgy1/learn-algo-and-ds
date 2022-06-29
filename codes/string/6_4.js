var convert = function (s, numRows) {
  if (numRows == 1) return s;

  let res = "";
  for (let r = 0; r < numRows; r++) {
    let increment = 2 * (numRows - 1);

    for (let j = r; j < s.length; j += increment) {
      res += s[j]; //add first row and last row

      if (r > 0 && r < numRows - 1 && j + increment - 2 * r < s.length) {
        res += s[j + increment - 2 * r]; //add missing char in other(exclude first and last ) row
      }
    }
  }
  return res;
};
console.log(convert("PAHNAPLSIIGYIR", 3));
// p    A     I     R
// A  N   P  S  I  I
// H       L     G
//PAIIANPSIYRHLG
//PAIIAPIRHLG
