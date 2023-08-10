<template>
  <div ref="root" class="xp-affix" :style="rootStyle">
    <div
      ref="targetRect"
      :class="{ 'xp-affix-fixed': state.fixed }"
      :style="affixStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onBeforeUnmount,
  shallowRef,
  computed,
  reactive,
  watch,
  defineExpose,
} from "vue";
const props = defineProps({
  // 偏移量
  offset: {
    type: Number,
    default: 0
  },
  // target：在指定父容器消失之后，其目标元素也希望跟着取消 fixed 状态
  target: {
    type: String,
  },
  // top/bottom
  position: {
    type: String,
    default: "top",
  },
  zIndex: {
    type: Number,
    default: 100,
  },
})

const emits = defineEmits(["change", "scroll"]);
// 滚动容器
const target = shallowRef<HTMLElement>();
// 固钉ref 目标元素(button)
const root = shallowRef<HTMLDivElement>();

// 固钉状态信息
const state = reactive({
  fixed: false,
  height: 0,
  width: 0,
  scrollTop: 0,
  clientHeight: 0,
  transform: 0,
})

// 固钉的宽高
const rootStyle = computed(() => {
  // 当slot被fixed脱标时会坍塌->设置宽高
  return {
    height: state.fixed ? `${state.height}px` : "",
    width: state.fixed ? `${state.width}px` : "",
  }
})

// 计算属性，通过固钉的状态自动更新固钉的样式
const affixStyle = computed(() => {
  if(!state.fixed) return
  const offset = props.offset ? `${props.offset}px` : 0;
  const transform = state.transform ? `translateY(${state.transform}px)` : "";
  
  // 计算的添加到fixed元素
  return {
    height: `${state.height}px`,
    width: `${state.width}px`,
    // 顶部或者底部固定
    top: props.position === "top" ? offset : "",
    bottom: props.position === "bottom" ? offset : "",
    transform,
    zIndex: props.zIndex,
  }

})

// 滚动容器target的scroll事件的响应函数 
const onScroll = function(e) {
  update()
  emits("scroll", e);
}

const update = () => {
  if(!root.value || !target.value) return

  // 更新固钉状态 距离上和左边框的距离(可视范围的距离)
  const rootRect = root.value.getBoundingClientRect()
  // 父容器的宽高....
  const targetRect = target.value.getBoundingClientRect()
  state.height = rootRect.height;
  state.width = rootRect.width;
  // 
  state.scrollTop = document.documentElement.scrollTop;
  console.log('state.scrollTop',document.documentElement.scrollTop);
  // 视口的高度
  state.clientHeight = document.documentElement.clientHeight

  if(props.position === 'top') {
    if(props.target) {// 有父容器
      // fixed条件: top<偏移量(固定值) + 父容器必须在可视窗口内 如果targetRect.bottom<0意味着父容器要从可视窗口顶部小时 取消fixed
      state.fixed = props.offset > rootRect.top && targetRect.bottom > 0
      // 目标元素的过渡计算 父容器底部位置 - 传入的偏移量 - 目标高度 让父元素的底 接触到目标元素的底 然后开始让目标元素进行过渡
      const difference = targetRect.bottom - props.offset - state.height;
      // 保证平滑过渡 将其设置到affixStyle transform的translateY值
      state.transform = difference < 0 ? difference : 0
    } else { // 没有父容器
      // 不存在target
      state.fixed = props.offset > rootRect.top
    }
  } else {
    if (props.target) {
      // 目标元素的rootBottom(底部位置) > 窗口高度 - 目标元素的偏移量 
      state.fixed = state.clientHeight - props.offset < rootRect.bottom && state.clientHeight > targetRect.top;
      // 可视窗口高度[常量] - 父容器顶部位置top[动态] - 传入的偏移量[常量] - 目标元素的高度[常量]
      const difference =state.clientHeight - targetRect.top - props.offset - state.height;
      state.transform = difference < 0 ? -difference : 0;
    } else {
      state.fixed = state.clientHeight - props.offset < rootRect.bottom;
    }
  }
  console.log(props.offset, rootRect.top);

}

watch(
  () => state.fixed,
  () => {
    emits("change", state.fixed);
  }
);

onMounted(()=>{
  // 根据传入的target确定 target容器
  // console.log('props.target',props.target);
  if(props.target) {
    // 获取父容器
    target.value = document.querySelector<HTMLElement>(props.target) ?? undefined
      if (!target.value) {
      throw new Error(`Target is not existed: ${props.target}`);
    }
  } else {
    // 没有就 整个html页面内容
    target.value = document.documentElement;
  }
  console.log('target.value',target.value);
  
  // 监听滚动容器的scroll事件
  window.addEventListener("scroll", onScroll, true);
  window.addEventListener("resize", onScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
});
defineExpose({
  update,
});

</script>

<script lang="ts">
export default {
  name: "XpAffix",
};
</script>

<style lang="scss">
.xp-affix {
  .xp-affix-fixed {
    position: fixed;
  }
}
</style>