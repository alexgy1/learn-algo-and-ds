class NumMatrix {
  constructor(M) {
    let yLen = M.length + 1,
      xLen = M[0].length + 1;
    this.sums = Array.from({ length: yLen }, () => Array(xLen).fill(0));

    this.initSums(this.sums, yLen, xLen);
  }

  initSums(sums, yLen, xLen, M) {
    for (let i = 1; i < yLen; i++) {
      for (let j = 1; j < xLen; j++) {
        sums[i][j] =
          M[i - 1][j - 1] +
          sums[i - 1][j] +
          sums[i][j - 1] -
          sums[i - 1][j - 1];
      }
    }
  }

  sumRegion(R1, C1, R2, C2) {
    return (
      this.sums[R2 + 1][C2 + 1] -
      this.sums[R2 + 1][C1] -
      this.sums[R1][C2 + 1] +
      this.sums[R1][C1]
    );
  }
}
