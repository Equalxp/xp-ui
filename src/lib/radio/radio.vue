<template>
  <div class="xp-radio" @click="handleChange" :class="classes">
    <span class="xp-radio-input" :class="classes"></span>
    <span class="xp-radio-label" :class="classes">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useRadio, radioProps, radioEmits } from "./radio";

const props = defineProps(radioProps);
const emits = defineEmits(radioEmits);

const {
  modelValue,
  label,
  size,
  disabled,
  classes
} = useRadio(props, emits);

const handleChange = () => {
  if(!disabled.value) {
    modelValue.value = props.label
  }
}
</script>

<script lang="ts">
export default {
  name: "XpRadio",
};
</script>

<style lang="scss">
$checked-color: #36ad6a;

$large-size: 16px;
$default-size: 14px;
$small-size: 12px;

$large-inner-size: 10px;
$default-inner-size: 8px;
$small-inner-size: 6px;

$large-height: 40px;
$default-height: 32px;
$small-height: 24px;

.xp-radio {
  cursor: pointer;
  margin-right: 32px;
  display: inline-flex;
  align-items: center;
  height: $default-height;
  position: relative;

  // 有边框的情况
  &.is-bordered {
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    padding: 0 14px;
    &.is-checked:not(.is-disabled) {
      color: $checked-color;
      border: 1px solid $checked-color;
    }
  }
  &.xp-radio-small {
    height: $small-height;
    &.is-bordered:not(.is-disabled) {
      padding: 0 10px;
    }
  }
  &.xp-radio-large {
    height: $large-height;
    // 除了有.is-disabled 属性的都有padding:0 18px
    &.is-bordered:not(.is-disabled) {
      padding: 0 18px;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    color: #c2c2c2;
  }

  > .xp-radio-input {
    width: $default-size;
    height: $default-size;
    display: inline-flex;
    box-shadow: #e0e0e6 0px 0px 0px 1px;
    border-radius: 100%;
    position: relative;

    &.xp-radio-small {
      width: $small-size;
      height: $small-size;
      &:before {
        left: calc($small-size / 2 - $small-inner-size / 2);
        top: calc($small-size / 2 - $small-inner-size / 2);
        width: $small-inner-size;
        height: $small-inner-size;
      }
    }
    &.xp-radio-large {
      width: $large-size;
      height: $large-size;
      &:before {
        left: calc($large-size / 2 - $large-inner-size / 2);
        top: calc($large-size / 2 - $large-inner-size / 2);
        width: $large-inner-size;
        height: $large-inner-size;
      }
    }

    &.is-checked {
      box-shadow: $checked-color 0px 0px 0px 1px;

      &:before {
        opacity: 1;
        transform: scale(1);
      }
    }

    // 显示绿色实心小圆圈
    &:before {
      content: " ";
      opacity: 0;
      position: absolute;
      left: calc($default-size / 2 - $default-inner-size / 2);
      top: calc($default-size / 2 - $default-inner-size / 2);
      width: $default-inner-size;
      height: $default-inner-size;
      background-color: $checked-color;
      border-radius: 50%;
      transform: scale(0.8);
      transition: opacity 300ms ease-in-out, background-color 300ms ease-in-out,
      transform 300ms ease-in-out;
    }
    &.is-disabled {
      background-color: #fafafc;
      box-shadow: #e0e0e6 0px 0px 0px 1px;
      &:before {
        background-color: #c0c4cc;
      }
    }
    &:not(.is-disabled):hover {
      box-shadow: $checked-color 0px 0px 0px 1px;
    }
  }

  > .xp-radio-label {
    padding-left: 8px;
    user-select: none;
    font-size: $default-size;

    &.xp-radio-large {
      font-size: $large-size;
    }

    &.xp-radio-small {
      font-size: $small-size;
    }
  }
}

</style>