// 移除默认样式
import "@/lib/xp.scss";
import "@/assets/css/index.scss";
import 'github-markdown-css'

// 导入这个注册全局组件的
import XpUi from '@/lib/index'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(XpUi);

app.mount("#app");