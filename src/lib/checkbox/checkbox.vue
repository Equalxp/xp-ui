<template>
  <label class="xp-checkbox" :class="classes" @click="handleChange" tabindex='0'>
    <!-- 选择图标 -->
    <span class="xp-checkbox-input" :class="classes">
      <!-- 选择上的图标icon  -->
      <xp-icon :color="iconColor" :size="iconSize">
        <Subtract12Filled v-if="indeterminate" />
        <Check v-else />
      </xp-icon>
    </span>
    <!-- 选择图标后的文字 -->
    <span class="xp-checkbox-label" :class="classes">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { Check } from '@vicons/fa'
import { checkboxProps, checkboxEmits, useCheckbox } from "./checkbox.ts";
import { Subtract12Filled } from "@vicons/fluent";

const props = defineProps(checkboxProps)
const emits = defineEmits(checkboxEmits)

const {
  modelValue,
  label,
  classes,
  iconSize,
  disabled,
  iconColor,
  isGroup,
  indeterminate,
} = useCheckbox(props, emits);

const handleChange = () => {
  if(!disabled.value) {
    if (isGroup.value) {
      const index = modelValue.value.indexOf(label.value);
      if (index > -1) {
        modelValue.value.splice(index, 1);
      } else {
        modelValue.value.push(label.value);
      }
      modelValue.value = [...modelValue.value];
    } else {
      modelValue.value = !modelValue.value;
    }
  }
}

</script>

<script lang="ts">
export default {
  name: "XpCheckbox",
};
</script>

<style lang="scss">
$primary-color: #4b9e5f;

$large-size: 16px;
$default-size: 14px;
$small-size: 12px;

$large-height: 40px;
$default-height: 32px;
$small-height: 24px;

.xp-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  height: $default-height;

  // 
  &.is-disabled {
    cursor: not-allowed;
  }

  &.xp-checkbox-large {
    height: $large-height;
  }

  &.xp-checkbox-small {
    height: $small-height;
  }

  // 不是.is-disabled属性的 hover时 / active时
  &:not(.is-disabled):hover .xp-checkbox-input {
    border: 1px solid #4b9e5f;
  }
  &:not(.is-disabled):focus .xp-checkbox-input {
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    border: 1px solid #4b9e5f;
  }

  &.is-border {
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    padding: 0 8px;
    // 选中之后 border的颜色
    &.is-checked:not(.is-disabled),
    &.is-indeterminate:not(.is-disabled) {
      color: $primary-color;
      border: 1px solid #18a058;
    }

    &.xp-checkbox-large {
      padding: 0 12px;
    }

    &.xp-checkbox-small {
      padding: 0 8px;
    }
  }

  > .xp-checkbox-input {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $default-size;
    height: $default-size;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid rgb(224, 224, 230);

    &.is-checked {
      background-color: $primary-color;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
      border: 1px solid #18a058;
      transition: all 0.3s ease-in-out;
    }

    &.xp-checkbox-large {
      width: $large-size;
      height: $large-size;
    }

    &.xp-checkbox-small {
      width: $small-size;
      height: $small-size;
    }

    &.is-disabled {
      border: 1px solid rgb(224, 224, 230);
      box-shadow: none;
      background: #fafafc;
    }

    &.is-indeterminate {
      background-color: $primary-color;
      border: 1px solid #18a058;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }
  }
  > .xp-checkbox-label {
    padding: 0 10px;
    user-select: none;
    color: rgb(51, 54, 57);
    font-size: $default-size;

    &.xp-checkbox-large {
      font-size: $large-size;
    }

    &.xp-checkbox-small {
      font-size: $small-size;
    }

    &.is-disabled {
      color: #c2c2c2ff;
    }
  }
}
</style>
