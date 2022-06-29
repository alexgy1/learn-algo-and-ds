var sortedArrayToBST = function (nums) {
  let build = (l, r) => {
    if (l > r) return null;

    let mid = l + Math.floor((r - l) / 2);

    let rootVal = nums[mid];
    let root = new TreeNode(rootVal);
    root.left = build(l, mid - 1);
    root.right = build(mid + 1, r);
    return root;
  };
  return build(nums, 0, nums.length - 1);
};
