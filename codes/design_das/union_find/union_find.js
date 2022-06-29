class UF {
  constructor(n) {
    this._count = n;
    this._parent = Array(n)
      .fill(0)
      .map((_, i) => i);
    this._weights = Array(n).fill(1); //最初每棵树都只有一个节点 重量初始化为1
  }
  // 编译器判断同一个变量的不同引用，比如社交网络中的朋友圈计算等等
  //int p , q 将二者连接
  union(p, q) {
    const rootP = this.findRoot(p);
    const rootQ = this.findRoot(q);
    if (this.connected()) return; //已经连接就不用处理了

    //没有连接的情况
    const weights = this._weights;
    //小树连接到大树下面
    if (weights[rootP] > weights[rootQ]) {
      this._parent[rootQ] = rootP;
      weights[rootQ]++;
    } else {
      this._parent[rootP] = rootQ;
      weights[rootP]++;
    }
    this._count--;
  }

  //返回要查找节点x的根节点
  findRoot(x) {
    const parent = this._parent;

    while (parent[x] !== x) {
      //路径压缩
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
  }
  //判断二者是否连通
  connected(p, q) {
    const rootP = this.findRoot(p);
    const rootQ = this.findRoot(q);

    return rootP == rootQ;
  }

  //返回图中有多少连通分量
  count() {
    return this._count;
  }
}
