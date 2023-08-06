<template>
  <div class="xp-tabs" :class="classes">
    <!-- tabs的头部 -->
    <div class="xp-tabs-header" ref="container">
      <!-- tabs的文字 -->
      <div 
        class="xp-tabs-header-item"
        :class="{ 'is-active': modelValue == title }"
        v-for="(title,index) in titles"
        :key="index"
        @click="handleTabsItemClick(title)"
        :ref="getHeaderItemRef(title)"
      >
        {{ title }}
      </div>
      <!-- tabs的下划线 -->
      <div
        class="xp-tabs-header-indicator"
        v-if="type === 'line'"
        ref="indicator"
      ></div>
    </div>
    <!-- tabs的内容 -->
    <div class="xp-tabs-content">
      <!-- 内容是 -->
      <component 
        :is="current"
        v-if="current"
        :key="current.props.title"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed, ref, onMounted, watchEffect } from "vue";
import Xptab from '../tab/index.vue'

const props = defineProps({
  // v-model的值 selected
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: 'line'
  }
})

// slot是内容 Xptab的<slot></slot>
const slots = useSlots().default();
// console.log('slots',slots);

// v-model组件之间的自定义事件
const emits = defineEmits(['update:modelValue'])
const { type } = props;
const classes = {
  [`xp-tabs-${type}`]: type
}

slots.forEach((tag) => {
  if(tag.type.name !== Xptab.name) {
    throw new Error('XpTabs 子标签必须是XpTab')
  }
})

const selectedItem = ref<HTMLDivElement>(null);
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null);

onMounted(() => {
  watchEffect(() => {
    renderIndicator();
  });
});

// 渲染指示下划线
const renderIndicator = () => {
  // line情况
  if (selectedItem.value && props.type === "line") {
    // 返回一个DOMRect对象
    const { width } = selectedItem.value.getBoundingClientRect();
    indicator.value.style.width = width + "px";

    // left 元素右边的页面距离父元素左边的距离
    const { left: left1 } = container.value.getBoundingClientRect();

    const { left: left2 } = selectedItem.value.getBoundingClientRect();
    const left = left2 - left1;
    indicator.value.style.left = left + "px";
  }
};

// titles是每一个Xptab的内容值
const titles = slots.map((tag) => tag.props.title)
// 当前的seleted的选项
const current = computed(() => {
  return slots.find((tag) => tag.props.title === props.modelValue)
})

// 通过改变title的值 传递到v-model那边 改变选中状态
const handleTabsItemClick = (title: string) => {
  // v-model传值
  emits('update:modelValue',title)
}

const getHeaderItemRef = (title) => {
  return (e) => {
    if(title === props.modelValue) {
      // selectedItem就是当前选择的<div xxx>xxx</div>
      // console.log('selectedItem',selectedItem.value);
      return selectedItem.value = e
    }
  };
};
</script>

<script lang="ts">
export default {
  name: "XpTabs",
};
</script>

<style lang="scss">
$active-color: #36ad6a;
$color: #333;
$border-color: #d9d9d9;
$card-background: #f7f7fa;
$white: #fff;
$radius: 3px;
$h: 40px;

.xp-tabs {
  width: 100%;
  &.xp-tabs-line{
    .xp-tabs-header {
      display: flex;
      border-bottom: 1px solid $border-color;
      color: $color;
      position: relative;
      height: $h;

      &-item {
        margin:0 16px;
        height: $h;
        line-height: $h;
        font-size: 14px;
        cursor: pointer;
        white-space: nowrap;

        // 选中的状态样式
        &.is-active,
        &:hover {
          color: $active-color;
        }
      }
      &-item:first-of-type {
        padding-left: 0;
      }
      &-indicator {
        position: absolute;
        height: 3px;
        background: $active-color;
        left: 0;
        bottom: -1px;
        transition: all 250ms;
      }
    }
  }
  // 卡片风格
  &.xp-tabs-card {
    .xp-tabs-header {
      display: flex;
      background-color: $card-background;
      border-radius: $radius;
      $color: #333;
      align-items: center;
      height: $h;
      padding: 3px;
      &-item {
        flex-basis: 0;
        flex-grow: 1;
        flex-wrap: nowrap;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: $radius;
        height: 100%;
        font-size: 14px;
        cursor: pointer;
        transition: all 250ms ease;

        &.is-active {
          background-color: $white;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
        }
      }
    }
  }
}
.xp-tabs-content {
  padding: 8px 0;
}
</style>