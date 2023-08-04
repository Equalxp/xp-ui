<template>
  <div class="xp-tag" :class="classes" :style="style">
    <!-- 文字说明 -->
    <!-- <xp-ellipsis style="max-width: 10px;"> -->
    <xp-ellipsis>
      <slot></slot>
    </xp-ellipsis>
    <!-- 图标 -->
    <xp-icon :size="18" v-if="closable" @click="handleClose">
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

  &.is-default {
    // 边框 背景 字体颜色
    border: 1px solid rgb(239, 239, 245);
    background-color: rgb(250, 250, 252);
    color: rgb(51, 54, 57);
  }

}

</style>