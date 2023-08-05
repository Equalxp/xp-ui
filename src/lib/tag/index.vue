<template>
  <div class="xp-tag" :class="classes" :style="style">
    <!-- 文字说明 -->
    <xp-ellipsis>
    <!-- <xp-ellipsis> -->
      <slot></slot>
    </xp-ellipsis>
    <!-- 图标 -->
    <xp-icon :size="18" v-if="closeable" @click="handleClose">
      <Close></Close>
    </xp-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Close } from '@vicons/ionicons5'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  color: {
    type: Object,
    default: undefined,
  },
})
// 接收传递的函数
const emits = defineEmits(['close'])
const classes = computed(() => ({
  [`is-${props.type}`]: props.type,
  [`is-${props.size}`]: props.size,
  [`is-closeable`]: props.closeable,
}))

const style = computed(() => {
  return props.color
    ? {
        color: props.color.color,
        backgroundColor: props.color.backgroundColor,
        borderColor: props.color.borderColor,
      }
    : "";
});

// 点击函数触发事件
const handleClose = () => {
  emits("close");
};
</script>

<script lang="ts">
export default {
  name: "XpTag",
};
</script>

<style scoped lang="scss">
.xp-tag {
  white-space: nowrap;
  position: relative;
  box-sizing: border-box;
  cursor: default;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 7px;
  height: 30px;
  font-size: 14px;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid rgb(239, 239, 245);
  background-color: rgb(250, 250, 252);
  color: rgb(51, 54, 57);
  max-width: 100%;
  // 边框 背景 字体颜色
  &.is-default {
    border: 1px solid rgb(239, 239, 245);
    background-color: rgb(250, 250, 252);
    color: rgb(51, 54, 57);
  }
  &.is-success {
    color: rgb(24, 160, 88);
    background-color: rgba(24, 160, 88, 0.1);
    border: 1px solid rgb(168, 219, 193);
  }
  &.is-success {
    color: rgb(24, 160, 88);
    background-color: rgba(24, 160, 88, 0.1);
    border: 1px solid rgb(168, 219, 193);
  }
  &.is-warning {
    color: rgb(240, 160, 32);
    background-color: rgba(240, 160, 32, 0.12);
    border: 1px solid rgb(249, 214, 159);
  }
  &.is-info {
    color: rgb(32, 130, 240);
    background-color: rgba(32, 130, 240, 0.1);
    border: 1px solid rgb(172, 208, 249);
  }
  &.is-error {
    color: rgb(208, 48, 80);
    background-color: rgba(208, 48, 80, 0.08);
    border: 1px solid rgb(241, 195, 204);
  }
  // 大小 字体大小
  &.is-small {
    font-size: 12px;
    line-height: 14px;
    height: 24px;
  }
  &.is-large {
    height: 34px;
    font-size: 16px;
    line-height: 16px;
  }
  .xp-icon {
    cursor: pointer;
  }
  &.is-closeable {
    padding-right: 3px;
  }
}
</style>