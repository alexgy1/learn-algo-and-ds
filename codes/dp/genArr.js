let arr = new Array(3);
console.log(arr, arr[0]);

let arr2 = Array(3);
console.log(arr2, arr2[0]);
//arr 使用Array 不用new

let arr3 = Array(3).fill();
console.log(arr3, arr3[0]);

let arr4 = Array(3).fill(undefined);
console.log(arr4, arr4[0]);
//fill()不传参数 默认是给每一项填充undefined

let arr5 = Array(3).map(() => []);
console.log(arr5, arr5[0]);
let arr6 = Array(3)
  .fill()
  .map(() => []);
console.log(arr6, arr6[0]);
//需要使用map返回一个新的数组 。对于每一个数组 继续使用Array(n).fill(value)来填充值

/**
 *
 * @param {number} m  行
 * @param {number} n 列
 * @param {number} value 每一个cell要填充的值
 * @returns 2d array m*n with value in each cell
 */
let MN2DArr = (m, n, value) => {
  return Array(m)
    .fill()
    .map(() => Array(n).fill(value));
};
console.log(MN2DArr(3, 4, 0));
