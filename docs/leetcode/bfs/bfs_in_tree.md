## bfs level order in tree

## 基础的 bfs 实现， 不能看出当前值属于哪个层级

## 基础的 bfs 实现(Leetcode 102)， 但是可以看出当前值属于哪个层级 每次取到 queue 的 length 这就是一层内的所有元素,实现如下：

```js
var levelOrder = function (root) {
  //3
  //9 20
  //15 7
  //特点是 从上到下 从左到右 先进先出， 符合这个特点的数据结构是queue, 所以使用queue
  let res = []; // output
  if (root == null) return res;
  let queue = [];
  //怎么开始？ 先将根节点入队
  queue.push(root);
  //一直判断的条件： 队不为空
  while (queue.length > 0) {
    //观察结果是二维数组 所以要再初始化一个数组 记录当前层级的元素
    let nowLevelArr = [];
    let len = queue.length; //更新当前层级的长度

    for (let i = 0; i < len; i++) {
      //逐个出队
      let node = queue.shift();

      //判断node有的情况 才处理
      if (node) {
        nowLevelArr.push(node.val); //当前节点的值 从左到右 push到 nowLevelArr数组
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }

    //处理完当前层
    res.push(nowLevelArr);
  }

  return res;
};
```

## 基础的 bfs 实现， 但是可以看出当前值属于哪个层级 之上的扩展

- 102.二叉树的层序遍历 done
- 107.二叉树的层次遍历 II done
- 199.二叉树的右视图 done rightSide 变量记录当前的最右边的值
- 637.二叉树的层平均值 done
- 429.N 叉树的层序遍历 done 
- 515.在每个树行中找最大值 done 
- 513.找树左下角的值 done
- 116.填充每个节点的下一个右侧节点指针 todo
- 117.填充每个节点的下一个右侧节点指针 II todo
- 104.二叉树的最大深度 done
- 111.二叉树的最小深度 done
