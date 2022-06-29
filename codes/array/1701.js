/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  //sort by numberOfUnitsPerBoxi  then we can get the maximum  units
  boxTypes.sort((a, b) => b[1] - a[1]);

  let i = 0;
  let sum = 0;
  while (truckSize !== 0 && i < boxTypes.length) {
    let val = boxTypes[i];
    let remain = truckSize - val[0];

    if (remain > 0) {
      sum += val[0] * val[1];
      truckSize = remain;
    } else {
      sum += truckSize * val[1];
      truckSize = 0;
    }

    i++;
  }

  return sum;
};
// let boxTypes = [
//     [1, 3],
//     [2, 2],
//     [3, 1],
//   ],
//   truckSize = 4;

let boxTypes = [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  truckSize = 10;
console.log(maximumUnits(boxTypes, truckSize));
