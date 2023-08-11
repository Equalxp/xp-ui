<template>
  <div 
    class="xp-select"
    :tabindex="disabled ? '' : -1"
    ref="selectRef"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <!-- 非多选状态 -->
    <div v-if="!multiple" class="xp-base-select" :tabindex="disabled ? '' : -1">
      <!-- label显示 -->
      <div v-show="modelLabel" class="xp-select-label">{{ modelLabel }}</div>
      <!-- placeholder -->
      <div v-show="!modelLabel" class="xp-select-placeholder">{{ placeholder }}</div>
      <!-- 后缀图标的显示 -->
      <xp-icon
        :size="18"
        class="xp-select-suffix"
        @mousemove="clearable ? (closeVisible = true) : ''"
        @mouseleave="clearable ? (closeVisible = false) : ''"
        color="rgba(194, 194, 194, 1)"
      >
        <CloseCircleOutline
          v-if="closeVisible && modelLabel"
          @click="handleClear"
        />
        <IosArrowDown v-else />
      </xp-icon>
    </div>
    <!-- 多选状态 -->
    <div class="xp-base-select xp-select-tags" v-if="multiple">
      <!-- tag类型的 -->
      <xp-tag
        closeable
        v-for="(item,index) in modelLabel"
        :key="index"
        @close="handleClear(item)"
      >
       {{ item }}
      </xp-tag>
      <div v-show="modelLabel.length === 0" class="xp-select-placeholder">
        {{ placeholder }}
      </div>
      <xp-icon
        :size="18"
        class="xp-select-suffix"
        @mousemove="clearable ? (closeVisible = true) : ''"
        @mouseleave="clearable ? (closeVisible = false) : ''"
        color="rgba(194, 194, 194, 1)"
      >
        <CloseCircleOutline
          v-if="closeVisible && modelLabel"
          @click="handleClear"
        />
        <IosArrowDown v-else />
      </xp-icon>
    </div>
    <!-- 下拉框的各个选项 -->
    <div class="xp-select-dropdown">
      <div class="no-options" v-show="options.length === 0">
        无选项
      </div>
      <span
        class="xp-select-option"
        v-for="item in options"
        :class="{ 
          'is-active': multiple
            ? modelValue.includes(item.value)
            : modelValue === item.value,
          'is-disabled': item.disabled,
          'is-multiple': multiple,
        }"
        @click="handleOptionClick(item)"
        :key="item.value"
      >
        <xp-ellipsis>{{ item.label }}</xp-ellipsis>
        <xp-icon
          :size="18"
          class="xp-select-option-suffix-icon"
          v-if="multiple && modelValue.includes(item.value)"
        >
          <Check />
        </xp-icon>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import { IosArrowDown } from "@vicons/ionicons4"
import { CloseCircleOutline } from "@vicons/ionicons5";
import { Check } from "@vicons/tabler";
import { selectProps, selectEmits, useSelect } from "./index.ts";
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

const selectRef = ref()
const { 
  options, 
  modelValue, 
  modelLabel, 
  disabled, 
  placeholder, 
  clearable,
  classes,
  closeVisible,
  multiple,
} = useSelect(props,emits)
// 选中某一个

const handleOptionClick = (item) => {
  console.log('点击的item',item.value);
  if(!item.disabled) {
    // emits("update:modelValue", item.value);
    // emits("change", item.value);
    // 是多选的情况
    if (multiple.value) {
      // 多选 modelValue就有多个值 item.value是下拉选择的值
      const isRemove = modelValue.value.includes(item.value);
      isRemove
        // 删除这个
        ? modelValue.value.splice(modelValue.value.indexOf(item.value), 1)
        : modelValue.value.push(item.value);
      emits("update:modelValue", modelValue.value);
      emits("change", modelValue.value);
    }
    if (!multiple.value) {
      selectRef.value.blur();
      emits("update:modelValue", item.value);
      emits("change", item.value);
    }
  }
}
// 清除
const handleClear = (e) => {
  // emits('update:modelValue',"")
  // emits('clear',"")
  if (!multiple.value) {
    emits("update:modelValue", "");
    emits("clear", "");
  }
  if (multiple.value) {
    const value = options.value.find((v) => v.label === e)?.value;
    if (modelValue.value.indexOf(value) > -1) {
      modelValue.value.splice(modelValue.value.indexOf(value), 1);
    } else {
      modelValue.value.splice(0, modelValue.value.length);
    }
    emits("update:modelValue", modelValue.value);
    emits("clear", modelValue.value);
  }
}
// 所有的options / ComputedRef<"x">
// console.log('222',options,modelValue);



</script>

<script lang="ts">
export default {
  name: "XpSelect",
};
</script>

<style lang="scss">
.xp-select {
  width: 100%;
  position: relative;
  cursor: pointer;

  .xp-select-placeholder {
    color: rgba(194, 194, 194, 1);
  }
  .xp-select-label,
  .xp-select-placeholder {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .xp-base-select {
    width: 100%;
    line-height: 34px;
    min-height: 34px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 30px 0 15px;
    color: rgb(51, 54, 57);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;

    // 对select框hover ...
    &:hover {
      border-color: #c0c4cc;
    }
    &:active,
    &:focus {
      outline: none;
      border-color: #18a058;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }
    .xp-select-suffix {
      position: absolute;
      right: 5px;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  // 下拉的选项
  .xp-select-dropdown {
    z-index:1000;
    position: absolute;
    border-radius: 3px;
    padding: 0;
    top: calc(100% + 5px);
    width: 100%;
    opacity: 0;
    height: 0px;
    width: 100%;
    // pointer-events: none;
    background-color: #fff;
    transition: all 250ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,
      rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
    overflow-y: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;

    .no-options {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .xp-select-option {
      z-index:1000;
      display: inline-block;
      cursor: pointer;
      min-width: 100%;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      overflow: visible;
      background-color: #fff;
      position: relative;

      // 多选框的每一个标签的后缀icon
      .xp-select-option-suffix-icon {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        width: 30px;
        right: 0;
        top: 0;
      }

      // &指select-options 进行hover
      &:hover,
      &.is-active {
        background-color: #f3f3f5;
        color: #25a561;
      }
      &.is-disabled {
        cursor: not-allowed;
        background-color: #fff;
        color: #c2cddd;
      }
      &.is-disabled.is-active {
        background-color: #f9f9fa;
        color: #a5ceaf;
      }
      &.is-multiple {
        padding-right: 30px;
      }
    }
  }
  &:hover .xp-select-dropdown {
    pointer-events: auto;
  }
  // 它或者它的后代获取focus焦点时 都触发
  // 父元素.xp-select/其元素 focus .xp-select-dropdown会怎么怎么样
  &:focus-within .xp-select-dropdown {
    opacity: 1;
    height: 300px;
    width: 100%;
    pointer-events: auto;
  }
  &:focus-within .xp-base-select {
    outline: none;
    border-color: #18a058;
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
  }
  &.is-disabled {
    cursor: not-allowed;
  }
  &.is-disabled .xp-base-select {
    cursor: not-allowed;
    background-color: #fafafc;
    color: rgba(194, 194, 194, 1);
    &:hover,
    &:focus,
    &:active {
      border: 1px solid #dcdfe6;
      box-shadow: none;
    }
  }

}
</style>