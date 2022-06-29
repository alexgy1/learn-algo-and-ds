module.exports = {
  title: "前端关宇的算法学习笔记",
  description: "记录算法学习路程",
  head: [
    [
      "script",
      {},
      `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b072b6974962e9ca75766c51e1050dd2";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    </script>`,
    ],
  ],
  base: "/learn-algo-and-ds/",
  theme: "reco",
  markdown: {
    // 显示代码块行号
    lineNumbers: true,
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      { text: "更新日志", link: "/log" },
      {
        text: "Github",
        items: [{ text: "Github", link: "https://github.com/alexgy1" }],
      },
    ],
    sidebar: [
      {
        title: "欢迎开启你的算法学习之路",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "链表",
        path: "/suanfa/ll",
        collapsable: false, // 不折叠
      },
      {
        title: "树",
        path: "/suanfa/tree",
        collapsable: false, // 不折叠
      },
      {
        title: "回溯",
        path: "/suanfa/backtrack",
        collapsable: false, // 不折叠
      },
      {
        title: "递归",
        path: "/suanfa/recursive",
        collapsable: false, // 不折叠
      },
      {
        title: "二分查找",
        path: "/leetcode/binary_search/problems",
        collapsable: false, // 不折叠
      },
      {
        title: "图",
        path: "/suanfa/graph",
        collapsable: false, // 不折叠
      },
      {
        title: "BST(Binary Search Tree)",
        path: "/suanfa/bst",
        collapsable: false, // 不折叠
      },
    ],
  },
};
