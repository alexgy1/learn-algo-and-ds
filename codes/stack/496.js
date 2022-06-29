function nextGreater(nums1, nums2) {
  //O(m*n)
  let nums1Index = {};
  nums1.forEach((n, i) => (nums1Index[n] = i));
  let res = Array(nums1.length).fill(-1); //init with -1

  for (let i = 0; i < nums2.length; i++) {
    let index = nums1Index[nums2[i]];
    if (index == undefined) continue;

    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[i]) {
        res[index] = nums2[j];
        break; //find first one
      }
    }
  }
  return res;
}

function nextGreater2(nums1, nums2) {
  //O(m*n)
  let nums1Index = {};
  nums1.forEach((n, i) => (nums1Index[n] = i));
  let res = Array(nums1.length).fill(-1); //init with -1

  let stack = [];

  for (let i = 0; i < nums2.length; i++) {
    let cur = nums2[i];
    //当前元素比栈顶的元素大
    while (stack.length > 0 && cur > stack[stack.length - 1]) {
      let val = stack.pop(); //弹出的元素是 nums1里面的一个
      let idx = nums1Index[val]; //找到下标
      res[idx] = cur; //它的下一个更大元素就是栈里面弹出的元素
    }
    if (nums1Index[cur] !== undefined) {
      stack.push(cur);
    }
  }
  return res;
}

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];

console.log(nextGreater(nums1, nums2));
console.log(nextGreater2(nums1, nums2));

var nextGreaterElement3 = function (nums1, nums2) {
  let res = Array(nums1.length).fill(-1); //init with -1
  let stack = [];
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    let cur = nums2[i];
    while (stack.length > 0 && cur > stack[stack.length - 1]) {
        map.set()
    }
    stack.push(cur);
  }
};
