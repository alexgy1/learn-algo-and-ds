class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.list = new DoubleLinkedList();
    this.size = 0;
  }
  //associating a value to the given key, while evicting the least recently used item if the cache is already full.
  put(key, val) {
    //如果key 存在
    //取出node
    //更新node的值
    //将node移动到链表头部
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.val = val;
      this.list.move2front(node);
      return;
    }

    //如果key不在

    //a 如果超过容量  从链表和map里面删除这个节点 并且减小size
    if (this.size == this.capacity) {
      const lastNode = this.list.removeLast();
      this.map.delete(lastNode.key);
      this.size--;
    }

    //b 不管超过容量  将newNode放到链表头部 并且存到hashmap里面
    let newNode = new Node(val, key);
    this.map.set(key, newNode);
    this.list.add(newNode);
    this.size++;
  }
  // retrieving the value associated to the given key if this one exists at all in the cache, while updating the underlying list to keep LRU order.
  get(key) {
    //如果不存在 返回-1
    if (!this.map.has(key)) return -1;

    //如果存在
    //从map里面取出node
    //将node移动到链表头部（头部最多使用 ， 尾部最少使用）
    //返回node.value
    let node = this.map.get(key);
    this.list.move2front(node);
    return node.value;
  }
}

class Node {
  constructor(val, key, prev = null, next = null) {
    this.val = val;
    this.key = key;
    this.prev = prev;
    this.next = next;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this._connect(this.head, this.tail);

    this.size = 0;
  }
  //add node to first
  add(node) {
    this._connect(node, this.head.next);
    this._connect(this.head, node);
  }
  //needs to return the node it deletes
  removeLast() {
    const newLastNode = this.tail.prev;
    this._deleteNode(newLastNode);
    return newLastNode;
  }
  move2front(node) {
    this._deleteNode(node);
    this.add(node);
  }
  _connect(prevNode, nextNode) {
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
  _deleteNode(node) {
    this._connect(node.prev, node.next);
  }
}
