/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(-1, head);

  let leftPrev = dummy,
    cur = head;
  //1) reach node at position left
  for (let i = 0; i < left - 1; i++) {
    leftPrev = cur;
    cur = cur.next;
  }

  //2) reveser from left to right
  let prev = null;
  for (i = 0; i < right - left + 1; i++) {
    let next = cur.next;
    cur.next = prev;

    prev = cur;
    cur = next;
  }
  //cur is null to the end or next node after right node
  //3) update pointers
  leftPrev.next.next = cur;
  leftPrev.next = prev; //prev is right

  return dummy.next;
};
