class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }

  getNext() {
    return this.next;
  }
  printNodeList(node) {
    let temp = node;
    while (temp) {
      console.log(temp.val, "temp.val");
      temp = temp.getNext();
    }
  }
  reverseLinkedList(head) {
    if (head == null || head.next == null) return head;

    let newHead = this.reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

n1.setNext(n2);
n2.setNext(n3);
n3.setNext(n4);
n4.setNext(n5);

n1.printNodeList(n1);
let reversed = n1.reverseLinkedList(n1);
reversed.printNodeList(reversed);
