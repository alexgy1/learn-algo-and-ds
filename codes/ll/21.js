var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  let dummy = new ListNode(-1);
  let cur = dummy;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2;
      l2 = l2.next;
    } else {
      cur.next = l1;
      l1 = l1.next;
    }

    cur = cur.next;
  }

  cur.next = l1 || l2;

  return dummy.next;
};
