/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let oldToCopy = new Map();

  let cur = head;

  while (cur == null) return null;

  //1st loop copy node to hashmap
  while (cur) {
    let copy = new Node(cur.val);

    oldToCopy.set(cur, copy);
    cur = cur.next;
  }

  console.log("map", oldToCopy);

  //2ed loop  add pointer  to copy  (next and random)
  cur = head;

  while (cur) {
    let copy = oldToCopy.get(cur);
    copy.next = oldToCopy.get(cur.next) || null;
    copy.random = oldToCopy.get(cur.random) || null;

    cur = cur.next;
  }

  return oldToCopy.get(head);
};
