// router/index.ts 添加一个展示的button页面
import { createRouter, createWebHashHistory } from "vue-router"
import { docRoutes } from "./doc-routes"

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/demo",
      component: () => import("../views/demo.vue")
    },
    {
      path: "/home",
      component: () => import("../views/home/index.vue")
    },
    {
      path: "/doc",
      redirect: '/doc/intro',
      component: () => import("../views/doc/index.vue"),
      children: docRoutes
    }
  ]
})

export default router
