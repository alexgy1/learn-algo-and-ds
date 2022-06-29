class QueueByStack {
  constructor() {
    this.in = [];
    this.out = [];
  }
  push(x) {
    this.in.push(x);
  }

  //返回队头元素
  peek() {
    if (this.out.length == 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  pop() {
    this.peek(); //保证out 不为空
    return this.out.pop();
  }

  empty() {
    return this.in.length == 0 && this.out.length == 0;
  }
}

let queue = new QueueByStack();

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.peek());
console.log(queue.pop());
console.log(queue.peek());
queue.push(4);
