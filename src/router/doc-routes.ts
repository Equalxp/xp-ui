

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
    },
    {
      path: 'carousel',
      name: '轮播图 Carousel',
      component: () => import('../views/doc/carousel/index.vue')
    },
    {
      path: 'calendar',
      name: '日历 Calendar',
      component: () => import('../views/doc/calendar/index.vue')
    },
    

  ],
  数据录入组件: [
    {
      path: 'checkbox',
      name: '多选框 checkbox',
      component: () => import('../views/doc/checkbox/index.vue')
    },
    {
      path: 'input',
      name: '输入框 Input',
      component: () => import('../views/doc/input/index.vue')
    },
    {
      path: 'select',
      name: '选择器 Select',
      component: () => import('../views/doc/select/index.vue')
    },
    {
      path: 'switch',
      name: '开关 Switch',
      component: () => import('../views/doc/switch/index.vue')
    },
    {
      path: 'radio',
      name: '单选框 Radio',
      component: () => import('../views/doc/radio/index.vue')
    },
    
    
  ],
  反馈组件: [
    {
      path: 'alert',
      name: '提示 Alert',
      component: () => import('../views/doc/alert/index.vue')
    },
    {
      path: 'dialog',
      name: '对话框 Dialog',
      component: () => import('../views/doc/dialog/index.vue')
    },
    {
      path: 'message',
      name: '消息框 Message',
      component: () => import('../views/doc/message/index.vue')
    },
  ],
  导航组件: [
    { 
      path: "affix",
      component: () => import('../views/doc/affix/index.vue'),
      name: "固钉 Affix" 
    },
    { 
      path: "backtop",
      component: () => import('../views/doc/backtop/index.vue'),
      name: "回到顶部 Backtop" 
    },
    { 
      path: "breadcrumb",
      component: () => import('../views/doc/breadcrumb/index.vue'),
      name: "面包屑 Breadcrumb" 
    },
    { 
      path: "tabs",
      component: () => import('../views/doc/tabs/index.vue'),
      name: "标签页 Tabs" 
    },

  ]
}

let docRoutes:any = [];
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]];
}

export { docRoutes, docMenus };