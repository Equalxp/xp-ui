// 打包上传npm的入口
import { App } from "vue";

import XpButton from './button/index.vue'

export {
  XpButton,
}
const components = [
  XpButton,
]

// 全局注册组件
export function registerXpUi(app:App): void {
  for(const component of components) {
    // 全局注册组件
    app.component(component.name,component)
  }
}
// 导出这个全局注册的函数
export default registerXpUi