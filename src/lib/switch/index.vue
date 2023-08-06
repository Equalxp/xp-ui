<template>
  <!-- button为整个按钮 span为里面的小圆 -->
  <button
    class="xp-switch"
    :class="classes"
    @click="toggle"
    >
    <!-- :style="{ background: modelValue ? activeColor : inactiveColor }" -->
    <span></span>
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  // 选中
  activeColor: {
    type: String,
    default: "#18a058",
  },
  // 没选中
  inactiveColor: {
    type: String,
    default: "#dbdbdb",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
  if(props.disabled) {
    return;
  }
  emit('update:modelValue',!props.modelValue)
};

const { modelValue, disabled, size } = toRefs(props);

const classes = computed(()=>{
  // 选中？ 禁止？ 大小？
  return {
    [`xp-switch-checked`]: modelValue.value,
    [`xp-switch-disabled`]: disabled.value,
    [`xp-switch-${size.value}`]: size.value,
  };
});
</script>

<script lang="ts">
export default {
  name: "XpSwitch",
};
</script>

<style lang="scss" scoped>
$default-h: 22px;
$default-h-2: $default-h - 4px;

$small-h: 16px;
$small-h-2: $small-h - 4px;

$large-h: 30px;
$large-h-2: $large-h - 4px;

$inactive-color: #dbdbdb;
$active-color: #18a058;
.xp-switch {
  height: $default-h;
  width: $default-h * 2;
  border: none;
  background: $inactive-color;
  border-radius: calc($default-h-2 / 1.5);
  position: relative;
  cursor: pointer;
  /* 解决移动端点击时有边框 */
  outline: none;
  -webkit-tap-highlight-color: #fff;
  -webkit-tap-highlight-color: transparent;

  &-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $default-h-2;
    width: $default-h-2;
    background: white;
    border-radius: calc($default-h-2 / 1.5);
    transition: all 250ms;
  }

  // 选中的状态样式
  &.xp-switch-checked {
    background: $active-color;
    > span {
      left: calc(100% - $default-h-2 - 2px)
    }
    &.xp-switch-small > span {
      left: calc(100% - $small-h-2 - 2px);
    }
    &.xp-switch-large > span {
      left: calc(100% - $large-h-2 - 2px);
    }
  }
  // active时 span向右动一下
  &:active {
    > span {
      width: $default-h-2 + 4px;
    }
    &.xp-switch-samll > span {
      width: $small-h-2 + 4px;
    }
    &.xp-switch-large > span {
      width: $large-h-2 + 4px;
    }
  }
  &.xp-switch-checked:active {
    > span {
      width: $default-h-2 + 4px;
      margin-left: -4px;
    }
    &.xp-switch-small > span {
      width: $small-h-2 + 4px;
      margin-left: -4px;
    }

    &.xp-switch-large > span {
      width: $large-h-2 + 4px;
      margin-left: -4px;
    }
  }

  &.xp-switch-small {
    height: $small-h;
    width: $small-h * 2;
    border-radius: calc($small-h-2 / 1.5);

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $small-h-2;
      width: $small-h-2;
      background: white;
      border-radius: calc($small-h-2 / 1.5);
      transition: all 250ms;
    }
  }
  &.xp-switch-large {
    height: $large-h;
    width: $large-h * 2;
    border-radius: calc($large-h-2 / 1.5);

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $large-h-2;
      width: $large-h-2;
      background: white;
      border-radius: calc($large-h-2 / 1.5);
      transition: all 250ms;
    }
  }
}

</style>