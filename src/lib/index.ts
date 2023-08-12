// 打包上传npm的入口
import { App } from "vue";

import XpAvter from './avater/index.vue'
import XpButton from './button/index.vue'
import XpIcon from './icon/index.vue'
import XpLink from './link/index.vue'
import XpEllipsis from './ellipsis/index.vue'
import XpTag from './tag/index.vue'
import XpCheckbox from './checkbox/checkbox.vue'
import XpCheckboxGroup from "./checkbox/checkbox-group.vue";
import XpSwitch from './switch/index.vue'
import XpInput from './input/index.vue'
import XpTab from './tab/index.vue'
import XpTabs from './tabs/index.vue'
import XpRadio from './radio/radio.vue'
import XpRadioGroup from './radio/radio-group.vue'
import XpMessage from './message/index.ts'
import XpAlert from './alert/index.vue'
import XpAffix from './affix/index.vue'
import XpBacktop from './backtop/index.vue'
import XpBreadcrumb from './breadcrumb/breadcrumb.vue'
import XpBreadcrumbItem from './breadcrumb/breadcrumb-item.vue'
import XpSelect from './select/index.vue'
import XpDialog from './dialog/index.vue'
import { openDialog } from "./dialog/openDialog";
import XpCarousel from './carousel/carousel.vue'
import XpCarouselItem from './carousel/carouselItem.vue'



// 支持组件的单一引入
export {
  XpAvter,
  XpButton,
  XpIcon,
  XpLink,
  XpEllipsis,
  XpTag,
  XpInput,
  XpCheckbox,
  XpCheckboxGroup,
  XpSwitch,
  XpTab,
  XpTabs,
  XpRadio,
  XpRadioGroup,
  XpMessage,
  XpAlert,
  XpAffix,
  XpBacktop,
  XpBreadcrumb,
  XpBreadcrumbItem,
  XpSelect,
  XpDialog,
  openDialog,
  XpCarousel,
  XpCarouselItem,



}
const components = [
  // 通用组件
  XpAvter,
  XpButton,
  XpIcon,
  XpLink,
  XpEllipsis,
  XpTag,
  // 数据录入组件
  XpInput,
  XpCheckbox,
  XpCheckboxGroup,
  XpSwitch,
  XpTab,
  XpTabs,
  XpRadio,
  XpRadioGroup,
  XpMessage,
  XpAlert,
  XpAffix,
  XpBacktop,
  XpBreadcrumb,
  XpBreadcrumbItem,
  XpSelect,
  XpDialog,
  openDialog,
  XpCarousel,
  XpCarouselItem,
  

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