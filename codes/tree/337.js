var rob = function (root) {
  if (root === null) return 0;
  return Math.max(...helper(root));
};

/**
 *
 * @param {*} root
 * @returns [withRootNum, withoutRootNum]
 */
var helper = function (root) {
  if (root === null) return [0, 0];

  let left = helper(root.left);
  let right = helper(root.right);

  const withRoot = root.val + left[1] + right[1];
  const withoutRoot = Math.max(...left) + Math.max(...right);

  return [withRoot, withoutRoot];
};
