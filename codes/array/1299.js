/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // if (arr[j] > arr[i]) {
      //   res[i] = arr[i];

      //   continue;
      // }
      if (arr[j] > arr[i]) {
        res.push(arr[j]);
        console.log(i, j, arr[i], arr[j]);
        break;
      } else {
        res.push(arr[i]);
        break;
      }
    }
  }
  console.log(res);

  return res;
};

let arr = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(arr));
