<template>
  <!-- 封装的button组件 加xp作为前缀 避免样式重叠 -->
  <button class="xp-button" :class="classes">
    <span v-if="loading" class="xp-loadingIndicator"></span>
    <!-- {{ theme 写的是要在按钮里显示的文字 所以得用slot }} -->
    <slot>{{ theme }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// 
const props = defineProps({
  // 接收的props参数进行类型的限定
  theme: {
    type: String,
    // 设置默认值 防止button里没有写theme的情况
    default: "default",
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
console.log(props.theme);

const { theme, dashed, size, round, disabled } = props;

// 计算属性
const classes = computed(() => {
  return {
    // theme 颜色 根据传过来的props中的 theme值 改变类名改变样式
    [`xp-theme-${theme}`]: theme,
    // dashed 边框线
    [`xp-theme-dashed`]: dashed,
    // 大小
    [`xp-size-${size}`]: size,
    // 圆角
    [`is-round`]: round,
    // 禁止选中
    [`is-disabled`]: disabled,
  };
});
</script>

<script lang="ts">
export default {
  name: "xpButton",
};
</script>

<style lang="scss" scoped>
$h-default: 32px;
$h-small: 20px;
$h-large: 48px;
$white: #fff;
$default-color: #333;
$primary-color: #36ad6a;
$info-color: #4098fc;
$success-color: #85ce61;
$warning-color: #f0a020;
$error-color: #d03050;
$grey: grey;
 
$default-border-color: #d9d9d9;
 
$radius: 3px;
$green: #18a058;
 
.xp-button {
  // 共同的样式
  box-sizing: border-box;
  height: $h-default;
  background-color: #fff;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  color: $default-color;
  border: 1px solid $default-border-color;
  user-select: none;
 
  &:focus {
    outline: none;
  }
 
  &::-moz-focus-inner {
    border: 0;
  }
 
  &.xp-size-large {
    font-size: 24px;
    height: $h-large;
    padding: 0 16px;
  }
  &.xp-size-small {
    font-size: 12px;
    height: $h-small;
    padding: 0 8px;
  }
 
  &.is-round.xp-size-default {
    border-radius: calc($h-default / 2);
  }
  &.is-round.xp-size-large {
    border-radius: calc($h-large / 2);
  }
  &.is-round.xp-size-small {
    border-radius: calc($h-small / 2);
  }
  // xp-theme-xxxx 不同的xxx对应的样式
  &.xp-theme-default {
    // 悬浮的样式 变浅(白色不变)
    &:hover {
      color: $green;
      border-color: $green;
      > .xp-loadingIndicator {
        border-style: dashed;
        border-color: $green $green $green transparent;
      }
    }
    // 点击下去的样式 变深色
    &:active {
      color: darken($green, 20%);
      border-color: darken($green, 20%);
      > .xp-loadingIndicator {
        border-style: dashed;
        border-color: darken($green, 20%) darken($green, 20%)
          darken($green, 20%) transparent;
      }
    }
    &.xp-theme-dashed {
      border-style: dashed;
    }
    > .xp-loadingIndicator {
      border-style: dashed;
      border-color: $default-color $default-color $default-color transparent;
    }
  }
  &.xp-theme-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;
 
    //变浅
    &:hover {
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
    }
    //变深
    &:active {
      background-color: darken($primary-color, 20%);
      border-color: darken($primary-color, 20%);
    }
 
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
      &:hover {
        background: lighten($primary-color, 20%);
        border-color: lighten($primary-color, 20%);
      }
    }
 
    &.xp-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $primary-color;
 
      > .xp-loadingIndicator {
        border-style: dashed;
        border-color: $primary-color $primary-color $primary-color transparent;
      }
    }
  }
  &.xp-theme-info {
    background-color: $info-color;
    border-color: $info-color;
    color: $white;
    &:hover {
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
    }
    &:active {
      background-color: darken($info-color, 20%);
      border-color: darken($info-color, 20%);
    }
 
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
      &:hover {
        background: lighten($info-color, 20%);
        border-color: lighten($info-color, 20%);
      }
    }
 
    &.xp-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $info-color;
 
      > .xp-loadingIndicator {
        border-style: dashed;
        border-color: $info-color $info-color $info-color transparent;
      }
    }
  }
  &.xp-theme-success {
    background-color: $success-color;
    border-color: $success-color;
    color: $white;
    &:hover {
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
    }
    &:active {
      background-color: darken($success-color, 20%);
      border-color: darken($success-color, 20%);
    }
 
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
      &:hover {
        background: lighten($success-color, 20%);
        border-color: lighten($success-color, 20%);
      }
    }
 
    &.xp-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $success-color;
 
      > .xp-loadingIndicator {
        border-style: dashed;
        border-color: $success-color $success-color $success-color transparent;
      }
    }
  }
  &.xp-theme-warning {
    background-color: $warning-color;
    border-color: $warning-color;
    color: $white;
    &:hover {
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
    }
    &:active {
      background-color: darken($warning-color, 20%);
      border-color: darken($warning-color, 20%);
    }
 
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
      &:hover {
        background: lighten($warning-color, 20%);
        border-color: lighten($warning-color, 20%);
      }
    }
 
    &.xp-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $warning-color;
 
      > .xp-loadingIndicator {
        border-style: dashed;
        border-color: $warning-color $warning-color $warning-color transparent;
      }
    }
  }
  &.xp-theme-error {
    background-color: $error-color;
    border-color: $error-color;
    color: $white;
    &:hover {
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
    }
    &:active {
      background-color: darken($error-color, 20%);
      border-color: darken($error-color, 20%);
    }
 
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
      &:hover {
        background: lighten($error-color, 20%);
        border-color: lighten($error-color, 20%);
      }
    }
 
    &.xp-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $error-color;
 
      > .xp-loadingIndicator {
        border-style: dashed;
        border-color: $error-color $error-color $error-color transparent;
      }
    }
  }
  > .xp-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $white $white $white transparent;
    border-style: solid;
    border-width: 2px;
    animation: xp-spin 1s infinite linear;
  }
}
 
@keyframes xp-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>