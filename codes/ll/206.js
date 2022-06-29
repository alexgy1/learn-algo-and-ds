// 迭代的方式 两个指针 prev 每次将cur的next指向prev 同时更新cur和prev 更新cur之前要保存cur.next
var reverseList = function (head) {
  let prev = null,
    cur = head,
    next = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    //更新指针
    prev = cur;
    cur = next;
  }
  return prev;
};

//递归实现
var reverseList2 = function (head) {
  if (head == null || head.next == null) return head;

  let newHead = reverseList2(head.next); // 假设head.next 后面的都已经逆序了
  //剩下就是处理head了 head的下一个的next指向自己 head的next指向null
  head.next.next = head;
  head.next = null;
  return newHead;
};

let successor = null;
var reverseN = function (head, n) {
  if (n == 1) {
    successor = head.next; //记录head的下一个节点
    return head;
  }
  let newHead = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = successor; //尾部连接到下一个节点
  return newHead;
};

var reverseBetween = function (head, m, n) {
  if (m == 1) {
    return reverseN(head, n);
  }
  //m!==1
  head.next = reverseBetween(haed, m - 1, n - 1);
  return head;
};
