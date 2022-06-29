function mergeSort(data, start, end) {
  if (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    mergeSort(data, start, mid);
    mergeSort(data, mid + 1, end);

    merge(data, start, mid, end);

    return data;
  }
}

function merge(data, start, mid, end) {
  let temp = Array(end - start + 1);

  let i = start,
    j = mid + 1,
    k = 0;

  //while both subarray have values, then try to merge them  in sorted order
  while (i <= mid && j <= end) {
    if (data[i] <= data[j]) {
      temp[k++] = data[i++];
    } else {
      temp[k++] = data[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = data[i++];
  }
  while (j <= end) {
    temp[k++] = data[j++];
  }

  //copy temp back to data
  for (let i = start; i <= end; i++) {
    data[i] = temp[i - start];
  }
}
let data = [-5, 20, 10, 3, 2, 0];
console.log(mergeSort(data, 0, data.length - 1));
