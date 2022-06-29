var s = (arr) => {
  //mark existiing
  for (let a of arr) {
    let newIndex = Math.abs(a) - 1;

    arr[newIndex] = Math.abs(arr[newIndex]) * -1;
  }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(s(nums));
