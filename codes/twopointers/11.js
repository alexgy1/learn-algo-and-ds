const maxArea = (height) => {
  let l = 0,
    r = height.length - 1;

  let max = -Infinity;
  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    if (area > max) area = max;

    //什么时候左 右移动？ 根据他们的高度

    // if (height[l] < height[r]) {
    //   l++;
    // } else if (height[l] > height[r]) {
    //   r--;
    // } else {
    //   //equal
    //   r--; //or l++
    // }

    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return max;
};
