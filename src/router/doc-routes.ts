

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
      path: 'avatar',
      name: '头像',
      component:() => import('../views/doc/avatar/index.vue')
    },
    {
      path: "button",
      name:'按钮',
      component: () => import("../views/doc/button/index.vue")
    },
    {
      path: 'icon',
      name: '图标',
      component:() => import('../views/doc/icon/index.vue')
    },
    {
      path: 'link',
      name: '链接',
      component:() => import('../views/doc/link/index.vue')
    },

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