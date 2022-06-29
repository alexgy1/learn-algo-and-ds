export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (typeof _hmt !== "undefined" && Array.isArray(_hmt)) {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
      }
    }
    next();
  });
};
