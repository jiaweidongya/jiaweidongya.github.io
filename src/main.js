import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router/intercept";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn"; //解决elementpLus一些组件是英文的问题

import Vconsole from "vconsole"; //调试
import.meta.env.VITE_APP_NODE_ENV === "development" ? new Vconsole() : "";
import { createPinia } from "pinia";
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount("#app");
