<template>
  <div class="xp-select">
    <!-- modelLable会显示出对应的label -->
    <xp-input readonly v-model="modelLable" :suffix-icon="IosArrowDown" />
    <!-- 下拉框的各个选项 -->
    <div class="xp-select-dropdown">
      <div class="no-options" v-show="options.length === 0">
        无选项
      </div>
      <span
        class="xp-select-option"
        v-for="item in options"
        :class="{ 
          'is-active': modelValue === item.value,
          'is-disabled': item.disabled
        }"
        :key="item.value"
        @click="handleOptionClick(item)"
      >
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IosArrowDown } from "@vicons/ionicons4"
import { selectProps, selectEmits, useSelect } from "./index.ts";
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

const { options, modelValue, modelLable } = useSelect(props,emits)
// 选中某一个
const handleOptionClick = (item) => {
  // console.log('点击的item',item.value);
  if(!item.disabled) {
    emits('update:modelValue', item.value)
    emits('change',item.value)
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

  .xp-select-dropdown {
    z-index:1000;
    position: absolute;
    border-radius: 3px;
    padding: 0;
    top: 48px;
    width: 100%;
    opacity: 0;
    height: 200px;
    width: 80%;
    pointer-events: none;


    background-color: #fff;
    transition: all 250ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,
      rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
    overflow: auto;
    .no-options {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .xp-select-option {
      display: inline-block;
      cursor: pointer;
      min-width: 100%;
      width: auto;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      overflow: visible;
      background-color: #fff;
      
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
    }
  }
  &:hover .jw-select-dropdown {
    pointer-events: auto;
  }
  &:focus-within .xp-select-dropdown {
    opacity: 1;
    height: 300px;
    width: 100%;
    pointer-events: auto;
  }
}
</style>