## 1 level order a tree impl

## 2 求二叉树的平均值

- 思路： bfs + 求每一层平均值

```js
var averageOfLevels = function (root) {
  if (root == null) return [];
  let queue = [root];
  let res = [];
  while (queue.length > 0) {
    let len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      if (node) {
        sum += node.val;
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
    res.push(sum / len);
  }
  return res;
};
```
