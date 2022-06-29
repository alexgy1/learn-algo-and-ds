function insertNode(head, data) {
  if (head == null) {
    head = new Node();
    head.data = data;
    return head;
  }

  if (head.data < data) {
    head.right = insertNode(head.right, data);
  } else {
    head.left = insertNode(head.left, data);
  }

  return head; //return the original node
}
