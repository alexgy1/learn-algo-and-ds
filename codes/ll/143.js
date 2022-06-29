/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  //1 find middle
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null; //断开链表

  let prev = null;

  while (second) {
    let next = second.next;
    second.next = prev;

    prev = second;
    second = next;
  }

  //prev is the head of 2

  //2 change to two and reverse second one
  let first = head,
    sec = prev;
  while (sec) {
    let temp1 = first.next,
      temp2 = sec.next;

    first.next = sec;
    sec.next = temp1;

    first = temp1;
    sec = temp2;
  }
  //3 merge two lists
};
