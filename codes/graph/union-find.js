/**
 * Time complexity : O(LogN)
 * Space complexity : O(N)
 */
class UnionFind {
  constructor(arr) {
    this.parent = Array(arr.length)
      .fill()
      .map((_, i) => i);
  }

  find(x) {
    return this.parent[x] == x ? x : this.find(this.parent[x]);
  }

  union(x, y) {
    let xPar = this.find(x),
      yPar = this.find(y);
    this.parent[yPar] = xPar;
  }
}

let uf = new UnionFind([1, 2, 3]);
console.log(uf.parent);
