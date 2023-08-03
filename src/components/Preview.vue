<!-- 封装Preview组件展示 -->
<template>
  <div class="preview-container">
    <!-- 属性介绍 -->
    <h2>
      {{ component1!.__sourceCodeTitle }}
      <!-- <xp-button @click="hideCode" v-if="codeVisible">隐藏代码</xp-button> -->
      <!-- <xp-button @click="showCode" v-else>查看代码</xp-button> -->
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </h2>
    <!-- 组件显示区域 -->
    <div class="preview-container-component">
      <!-- 动态组件 -->
      <!-- <component :is="componentId" /> -->
      <component :is="component1"></component>
    </div>
    <!-- 代码显示区域 -->
    <div class="preview-container-code" v-if="codeVisible">
      <!-- <pre> 标签 元素中的文本通常会保留空格和换行符 -->
      <!-- 代码块pre标签 -->
      <pre class="language-html" v-html="html" />
      <!-- <pre class="language-html">{{ component.__sourceCode }}</pre> -->

    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../lib/button/index.vue'
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
// 内容是异步加载的，这块时候就需要设置手动执行
const Prism = (window as any).Prism;
(window as any).Prism.manual = true
const props = defineProps({
  // Object用来定义类型
  component1: Object,
});
console.log(props.component1!.__sourceCode);
const html = computed(() => {
  // 必须在页面渲染出来之后再去调用
  return Prism.highlight(
    props.component1!.__sourceCode,
    Prism.languages.html,
    "html"
  );
});
const codeVisible = ref(false);
// 展示和隐藏代码
const showCode = () => (codeVisible.value = true);
const hideCode = () => (codeVisible.value = false);
</script>

<style scoped lang="scss">
$border-color: #d9d9d9;
.preview-container {
  border: 1px solid $border-color;
  // 上 左右 下
  margin: 32px 0px 32px;
  min-width: 300px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  // 代码部分
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      background-color: #fff;
    }
  }
}
</style>