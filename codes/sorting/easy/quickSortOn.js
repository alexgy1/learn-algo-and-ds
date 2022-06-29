var quickSort = function (arr) {
  if (arr.length < 1) return arr;

  let [l, r] = [[], []];
  let mid = Math.floor(arr.length / 2);
  let pivot = arr.splice(mid, 1);

  for (let a of arr) {
    if (a > arr[pivot]) {
      r.push(a);
    } else {
      l.push(a);
    }
  }
  return quickSort(l).concat(pivot, quickSort(r));
};

let arr = [1, 6, 3, 4, 5, 1, 0, 4, 8];
console.log(quickSort(arr));
