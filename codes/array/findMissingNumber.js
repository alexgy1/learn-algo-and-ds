const missing = (arr) => {
  let res = [];
  let repeat = -1;
  let missing = 1;

  for (let i = 0; i < arr.length; i++) {
    if (res[arr[i] - 1] !== undefined) {
      repeat = arr[i];
    }
    res[arr[i] - 1] = arr[i];
  }

  for (let key of res) {
    if (key === undefined) missing++;
  }
  return [missing, repeat];
};

missing([1, 3, 5, 4, 4]);
