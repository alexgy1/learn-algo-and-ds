var s = function (A) {
  let len = A.length;
  for (let i = 0; i < len; i++) {
    if (A[i] < 0) {
      A[i] = 0;
    }
  }

  console.log('A', A);

  for (let i = 0; i < len; i++) {
    let val = Math.abs(A[i]);

    if (val >= 1 && val <= len) {
      let newIndex = val - 1;

      if (A[newIndex] > 0) {
        A[newIndex] *= -1;
      } else if (A[newIndex] === 0) {
        A[newIndex] *= -1 * (len + 1);
      }
    }
  }
  console.log('A1 ', A);

  for (let i = 1; i < len + 1; i++) {
    if (A[i - 1] >= 0) {
      //>=0 从没来过
      return i;
    }
  }

  console.log('A2 ', A);
  return len + 1;
};

let A = [0, 1, 2];
console.log(s(A));
