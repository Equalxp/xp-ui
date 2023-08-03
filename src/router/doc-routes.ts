

const docMenus = {
  文档: [
    {
      path: "intro",
      name: "介绍",
      component: () => import("../../markdown/intro.md")
    },
    {
      path: "install",
      name: "安装",
      component: () => import("../../markdown/install.md")
    },
    {
      path: "get-started",
      name: "快速开始",
      component: () => import("../../markdown/get-started.md")
    },

  ],
  通用组件: [
    {
      path: "button",
      name:'按钮',
      component: () => import("../views/doc/button/index.vue")
    }
  ],
  数据录入组件: [],
  反馈组件: [],
  导航组件: []
}

let docRoutes:any = [];
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]];
}

export { docRoutes, docMenus };