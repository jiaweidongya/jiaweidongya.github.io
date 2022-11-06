import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "../layout/LoginPage/index.vue";
import TEST from "../components/test/index.vue";
const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/test",
    component: TEST,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
