// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function (s, numRows) {
//   let res = "";
//   for (let i = 0; i < numRows; i++) {
//     let skip = 2 * i - 2;
//     let cur = 0;
//     for (let j = 0; j < s.length; j++) {
//       res += s[j];
//       cur += skip;
//       while (cur < s.length) {
//         if (i > 0 && i < numsRows - 1 && 2 * i - 2 * j < s.length) {
//           res += s[cur - 2 * i];
//         }
//       }
//     }
//   }
//   console.log("res", res);
// };
// let s = "PAYPALISHIRING";
// convert(s, 3);
