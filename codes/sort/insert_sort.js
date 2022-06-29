function inertSrot(arr) {
  let len = arr.length;

  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    let j = i;

    while (j > 0 && arr[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j--;
    }

    nums[j] = temp;
  }
  return nums;
}
