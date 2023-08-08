// import type 协助类型检查和声明
import type { VNode } from "vue";

// 里面的元素都是VNode
type MessageQueueItem = {
  vm: VNode;
}

// VNode组成的数组
export type MessageQueue = MessageQueueItem[]