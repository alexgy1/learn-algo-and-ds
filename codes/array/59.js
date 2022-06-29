var generateMatrix = function (n) {
  let startX = (startY = 0);
  let loop = Math.floor(n / 2); //旋转的圈数
  let mid = Math.floor(n / 2); //中间位置
  let offset = 1; //控制每一层填充元素的个数
  let count = 1; //每个单元格要填充的内容
  let res = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  while (loop--) {
    let row = startX,
      col = startY;
    // [1,2,3]
    // [4,5,6]
    //左到右  左闭右开 0-2
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++;
    }
    //右到下 0-2
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    }

    // 右到左 右闭合左开
    for (; col > startX; col--) {
      res[row][col] = count++;
    }

    //下到上
    for (; row > startY; row--) {
      res[row][col] = count++;
    }

    //更新 起始位置
    startX++;
    startY++;

    //更新offest
    offset += 2;
  }

  if (n % 2 == 1) {
    //奇数的情况 填充中间的值
    res[mid][mid] = count;
  }
  //   console.log(res);
  return res;
};

// generateMatrix(1);
// generateMatrix(2);
generateMatrix(3);
generateMatrix(4);
generateMatrix(5);
