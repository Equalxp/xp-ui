<template>
  <div :class="classes">
    <!-- input框 -->
    <template v-if="type !=='textarea'">
      <input 
        ref="input"
        :disabled="disabled"
        :type="type"
        :readonly="readonly"
        :value="nativeInputValue"
        class="xp-input-inner"
        autocomplete="off"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <!-- 图标显示在前面 -->
      <span class="xp-input-prefix-icon">
        <!-- icon -->
        <xp-icon
          v-if="prefixIcon"
          class="prefix-icon"
          :size="18"
          color="#dcdfe6"
        >
          <component :is="prefixIcon" />
        </xp-icon>
      </span>
      <!-- 图标显示在后面 -->
      <span class="xp-input-suffix-icon">
        <!-- icon -->
        <xp-icon
          v-if="suffixIcon"
          class="suffix-icon"
          :size="18"
          color="#dcdfe6"
        >
          <component :is="suffixIcon" />
        </xp-icon>
        <!-- clearable -->
        <div
          class="close-icon"
          v-if="clearable && nativeInputValue.length > 0 && !disabled"
          @click="hanldeClear"
        >
          <xp-icon :size="18">
            <CloseCircleOutline />
          </xp-icon>
        </div>
        <!-- password -->
        <div
          class="password-icon"
          v-if="showPassword && !disabled"
          @click="handlePasswordVisible"
        >
          <xp-icon :size="18">
            <Eye />
          </xp-icon>
        </div>
      </span>
    </template>
    <!-- textarea框 -->
    <template v-else>
      <textarea
        ref="textarea"
        :readonly="readonly"
        class="xp-textarea-inner"
        autocomplete="off"
        :placeholder="placeholder"
        :value="nativeInputValue"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { inputEmit, inputProps, useInput } from "./index.ts";

import { CloseCircleOutline } from '@vicons/ionicons5';
import { Eye } from '@vicons/fa';

type TargetElement = HTMLInputElement | HTMLTextAreaElement;

// 接收props的类型限定
const props = defineProps(inputProps)
const emits = defineEmits(inputEmit)

const { 
  disabled,
  classes,
  clearable,
  type,
  passwordVisible,
  placeholder,
  suffixIcon,
  prefixIcon,
  readonly,
  nativeInputValue,
  // 计算computed
} = useInput(props,emits)

const input = ref<HTMLInputElement>();
const textarea = ref<HTMLTextAreaElement>();
const inputOrTextarea = computed(() => input.value || textarea.value);

const handleChange = (e:event) => {
  const { value } = e.target as TargetElement
  if(value === nativeInputValue.value) {
    return
  }
  emits("update:modelValue", value);
  emits("input", value);
}

const hanldeClear = () => {
  emits("update:modelValue", "");
  emits("input", "");
  emits("clear", "");
}

const handleBlur = (e) => {
  emits("blur", e);
};

const handleFocus = (e) => {
  emits("focus", e);
};

const focus = () => {
  nextTick(() => {
    inputOrTextarea.value?.focus();
  });
};

const blur = () => {
  nextTick(() => {
    inputOrTextarea.value?.blur();
    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNode(inputOrTextarea.value);
    selection.removeAllRanges();
  });
};

const handlePasswordVisible = () => {
  // visible
  passwordVisible.value = !passwordVisible.value;
};

const select = () => {
  nextTick(() => {
    inputOrTextarea.value?.focus();

    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNode(inputOrTextarea.value);
    selection.removeAllRanges();
    selection.addRange(range);
  });
};

defineExpose({
  input,
  inputOrTextarea,
  textarea,
  blur,
  focus,
  select,
});

</script>

<script lang="ts">
export default {
  name: "XpInput",
};
</script>

<style lang="scss">
$active-color: #18a058;
// $active-color: #060607

.xp-input {
  // input框外的div盒子
  width: 100%;
  cursor: pointer;
  position: relative;

  &.xp-input-prefix .xp-input-inner {
    padding-left: 30px;
  }

  &.xp-input-suffix .xp-input-inner {
    padding-right: 30px;
  }

  // input框的样式
  &-inner {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 15px;
    color: rgb(51, 54, 57);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      border-color: #c0c4cc;
    }
    &:active,
    &:focus {
      outline: none;
      border-color: $active-color;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }
    &::placeholder {
      color: rgb(213, 215, 220);
      font-size: inherit;
    }
  }

  &.is-disabled {
    .xp-input-inner {
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
  // icons居中显示 icon外的span
  .xp-input-suffix-icon,
  .xp-input-prefix-icon {
    position: absolute;
    bottom: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xp-input-suffix-icon {
    right: 5px;
  }
  .xp-input-prefix-icon {
    left: 5px;
  }

  .close-icon,
  .password-icon {
    display: none;
  }
  // hover/focus都会显示 后缀的
  &:hover .close-icon,
  &:focus .close-icon,
  &:hover .password-icon,
  &:focus .password-icon,
  .suffix-icon {
    margin: 0 1px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .xp-icon {
      color: #dcdfe6;

      &:hover {
        color: #c0c4cc;
      }
    }
  }
  .suffix-icon .xp-icon:hover {
    color: #dcdfe6;
  }
}

.xp-textarea {
  width: 100%;
  .xp-textarea-inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      border-color: #c0c4cc;
    }
    &:active,
    &:focus {
      outline: none;
      border-color: $active-color;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }

    &::placeholder {
      color: rgb(213, 215, 220);
      font-size: inherit;
    }
  }
}
</style>