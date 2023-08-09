<template>
  <div
    v-if="visible"
    class="xp-backtop"
    :style="{
      right: right + 'px',
      bottom: bottom + 'px'
    }"
    @click.stop="handleClick"
    >
    <slot>
      <xp-icon :size="26">
        <BackToTop />
      </xp-icon>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { BackToTop } from "@vicons/carbon";
import { shallowRef, onMounted, ref, onBeforeUnmount } from "vue";
import { easeInOutCubic, useThrottleFn } from "@/utils/index.ts";
const props = defineProps({
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  target: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(['click'])

// 原生获取dom 返回文档对象的根元素 
// ShallowRef<html...>更姓
const el = shallowRef<HTMLElement | undefined>(document.documentElement);
const container = shallowRef<Document | HTMLElement>(document);
const visible = ref(false);
// console.log('elel',el.value);// 整个html页面元素

// 回到顶部
const scrollToTop = () => {
  // el为当前元素操作对象
  if (!el.value) return;
  const beginTime = Date.now();
  const beginValue = el.value.scrollTop; // 获取el当前的滚动高度
  // 判断了当前环境是否存在requestAnimationFrame，如果不存在，则使用性能稍微差点的setTimeout。
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16)); // 注意点 1
  // 用于在每一帧中执行滚动的计算和更新
  const frameFunc = () => {
    if (!el.value) return;
    // 表示从动画开始到现在所经过的时间占总动画时间（这里是500毫秒）的百分比 动画进度值
    const progress = (Date.now() - beginTime) / 500;
    if (progress < 1) { // 小于1说明动画没有完成
      // 计算当前帧的滚动条距离顶部的位置，并更新 el 元素的滚动高度
      el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));
      // 在下一次重绘之前调用里面的回调函数更新动画 
      rAF(frameFunc); // 请求下一帧继续执行 frameFunc
    } else {
      // >1说明动画完成 将el元素的滚动条到顶部
      el.value.scrollTop = 0;
    }
  };
  rAF(frameFunc);
};

// 
const handleClick = (event: MouseEvent) => {
  scrollToTop();
  emits('click', event)
}

// 
const handleScroll = () => {
  if (el.value) visible.value = el.value.scrollTop >= props.visibilityHeight;
};

// 经过节流函数处理
const handleScrollThrottled = useThrottleFn(handleScroll, 300);

onMounted(() => {
  if (props.target) {
    // 获取对应id(target)的el preview组件下的 main
    el.value = document.querySelector<HTMLElement>(props.target) ?? undefined;
    console.log('target',el.value);
    if (!el.value) {
      throw new Error(`target is not existed: ${props.target}`);
    }
    container.value = el.value;
    container.value.addEventListener("scroll", handleScrollThrottled);
  }
});

onBeforeUnmount(() => {
  container.value.removeEventListener("scroll", handleScrollThrottled);
});

</script>
<script lang="ts">
export default {
  name: "xpBacktop",
};
</script>

<style lang="scss">
.xp-backtop {
  height: 44px;
  width: 44px;
  position: fixed;
  border-radius: 100%;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #5bab70;
    box-shadow: 0 2px 12px 0px rgba(0, 0, 0, 0.18);
  }

}

</style>