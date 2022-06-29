function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let mindIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[mindIndex]) {
        mindIndex = j;
      }
    }
    //swap
    swap(arr, i, mindIndex);
  }
  return arr;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(selectionSort([5, 2, 3, 1]));
