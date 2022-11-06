import router from "./index";

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  console.log("router", to);
  console.log("router", from);
  return true;
});

export default router;
