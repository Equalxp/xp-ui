// 打包上传npm的入口
import { App } from "vue";

import XpAvter from './avater/index.vue'
import XpButton from './button/index.vue'
import XpIcon from './icon/index.vue'
import XpLink from './link/index.vue'
import XpEllipsis from './ellipsis/index.vue'
import XpTag from './tag/index.vue'

// 支持组件的单一引入
export {
  XpAvter,
  XpButton,
  XpIcon,
  XpLink,
  XpEllipsis,
  XpTag,

}
const components = [
  XpAvter,
  XpButton,
  XpIcon,
  XpLink,
  XpEllipsis,
  XpTag,
  
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