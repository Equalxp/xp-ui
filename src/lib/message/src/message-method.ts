import { createVNode, render, ref } from "vue"
import type { MessageQueue } from "./message"
import MessageConstructor from "./message.vue"

let seed = 1
const zIndex = ref(2000)
// VNode组成的数组
const instances: MessageQueue = []

// 调用这个函数 就创建message组件并可接收参数
const message = function (options = {}) {
  let verticalOffset = 20
  // 多一个message 垂直偏移量加+16
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + 16
  })

  const id = `message_${seed++}`
  const props = {
    id,
    offset: verticalOffset,
    zIndex: zIndex.value++,
    ...options
  }

  // 追加的根元素
  let appendTo: HTMLElement | null = document.body

  // 创建div和添加类名
  const container = document.createElement("div")
  container.className = `container_${id}`

  // 元素类型 元素属性 元素内容 创建了虚拟dom
  const vm = createVNode(MessageConstructor, props, null)

  // 元素是destroy VNode会被GC收集
  vm.props!.onDestroy = () => {
    render(null, container)
  }

  // 渲染虚拟dom,渲染的位置
  render(vm, container)
  instances.push({ vm })
  appendTo.appendChild(container.firstElementChild!)
}

export default message
