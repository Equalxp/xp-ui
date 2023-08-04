

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
      name: '头像 Avatar',
      component:() => import('../views/doc/avatar/index.vue')
    },
    {
      path: "button",
      name:'按钮 Button',
      component: () => import("../views/doc/button/index.vue")
    },
    {
      path: 'icon',
      name: '图标 Icon',
      component:() => import('../views/doc/icon/index.vue')
    },
    {
      path: 'link',
      name: '链接 Link',
      component:() => import('../views/doc/link/index.vue')
    },
    {
      path: "tag",
      name: "标签 Tag",
      component: () => import('../views/doc/tag/index.vue')
    },
    {
      path: 'ellipsis',
      name: '文本省略 Ellipsis',
      component: () => import('../views/doc/ellipsis/index.vue')
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