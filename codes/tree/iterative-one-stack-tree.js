class node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

let root = null;
//参考 https://github.com/mission-peace/interview/blob/master/src/com/interview/tree/TreeTraversals.java#L98
//https://www.youtube.com/watch?v=xLQKdq0Ffjg
function postOrderIterativeUseOneStack(root) {
  if (root === null) return;
  let cur = root,
    st = [];

  while (cur !== null || st.length > 0) {
    if (cur !== null) {
      st.push(cur);
      cur = cur.left; //一直往左找
    } else {
      //当前节点左子节点为空了 在判断右子节点是否为空
      let temp = st[st.length - 1].right;
      if (temp === null) {
        //当前栈顶节点是叶子节点 出栈
        temp = st.pop();
        console.log(temp.val);
        //处理右子节点 和自己 符合条件的一直从栈里面弹出
        while (st.length > 0 && temp == st[st.length - 1].right) {
          temp = st.pop();
          console.log(temp.val);
        }
      } else {
        cur = temp;
      }
    }
  }
}

root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);
root.right.left = new node(6);
root.right.right = new node(7);

postOrderIterativeUseOneStack(root);
