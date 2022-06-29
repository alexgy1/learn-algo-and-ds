var removeFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let prev = dummy,
    cur = head;

  while (n--) cur = cur.next;
  while (cur) {
    cur = cur.next;
    prev = prev.next;
  }
  prev.next = prev.next.next;

  return dummy.next;
};
