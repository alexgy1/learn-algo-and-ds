var quickSort = function (nums, lo, hi) {
  if (l >= hi) return;

  let mid = parttition(nums, lo, hi);

  quickSort(nums, lo, mid);
  quickSort(nums, mid + 1, hi);

  merge(nums, lo, mid, hi);
};
//quick sort is an inorder  traversal in tree
//快速排序是一个构建 二叉搜索树的过程 但是会退化成链表 所以partition函数 就很重要

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function merge(nums, lo, mid, hi) {
  let res = [],
    c = 0;
  while (lo <= mid && mid <= hi) {
    res[c++] = nums[lo] < nums[hi] ? nums[lo++] : nums[hi++];
  }

  //   while()
  //   while()
}
