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

  mergeTwoSortedLists(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val < l2.val) {
      l1.next = this.mergeTwoSortedLists(l1.next, l2);
      return l1;
    } else {
      l2.next = this.mergeTwoSortedLists(l1, l2.next);
      return l2;
    }
  }
}

let n1 = new Node(1);
let n2 = new Node(4);
let n3 = new Node(5);

let n6 = new Node(6);
let n7 = new Node(8);
let n8 = new Node(10);
let n9 = new Node(13);
n1.setNext(n2);
n2.setNext(n3);

n6.setNext(n7);
n7.setNext(n8);
n8.setNext(n9);

n1.mergeTwoSortedLists(n1, n6);
n1.printNodeList(n1);
