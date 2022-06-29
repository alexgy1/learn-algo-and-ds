class MinHeap {
  constructor() {
    this.data = [];
  }
  size() {
    return this.data.length;
  }
  //获取最小堆的 最小值
  peek() {
    return this.size() == 0 ? null : this.data[0];
  }

  //添加新的元素到堆里面
  push(node) {
    this.data.push(node);
    this.shiftUp(node, this.size() - 1);
  }
  compare(a, b) {
    return a - b;
  }

  shiftUp(node, i) {
    let index = i;
    //调整到0为止
    while (i > 0) {
      //获取父节点的下标
      const parentIndex = (index - 1) >> 1; //等价于/2 但不会出现小数
      const parent = this.data[parentIndex];

      if (this.compare(node, parent) < 0) {
        //node < parent 上浮动 不用管左右子节点
        this.swap(index, parentIndex);
        //update index
        index = parent;
      } else {
        break; //相等 就停止
      }
    }
  }

  swap(i, j) {
    [this.data[j], this.data[i]] = [this.data[i], this.data[j]];
  }
  //最小堆 删除堆顶
  pop() {
    if (this.size() == 0) return null;

    //size 不为0
    let min = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.shiftDown(last, 0);
    }
  }

  shiftDown(node, i) {
    let index = i;
    const length = this.size();
    //折半调整 不需要调整所有
    const halfSize = length >> 1;
    while (i < halfSize) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;

      let left = this.data[leftIndex],
        right = this.data[rightIndex];

      if (this.compare(left, node) < 0) {
        //left < node

        //如果right存在 再比较
        if (rightIndex < length && this.compare(right, left) < 0) {
          // right < left
          this.swap(index, rightIndex);
          index = rightIndex;
        } else {
          //left最小
          this.swap(index, leftIndex);
          index = leftIndex;
        }
      } else if (rightIndex < length && this.compare(right, node) < 0) {
        //right < node
        this.swap(index, rightIndex);
        index = rightIndex;
      } else {
        break; //根节点最小 不处理
      }
    }
  }
}

var KthLargest = function (k, nums) {
  this.minHeap = new MinHeap(k);
  this.k = k;

  for (let n of nums) {
    this.add(n);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.push(val);

  if (this.minHeap.size() > this.k) {
    this.minHeap.pop();
  }

  return this.minHeap.peek();
};

let kthLargest = new KthLargest(3, [4, 5, 8, 2]);

kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
console.log(kthLargest.minHeap);
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8
