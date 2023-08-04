<!-- 封装Preview组件展示 -->
<template>
  <div class="preview-container">
    <!-- 属性介绍 -->
    <h2>
      {{ component!.__sourceCodeTitle }}
      <xp-button @click="hideCode" v-if="codeVisible">隐藏代码</xp-button>
      <xp-button @click="showCode" v-else>查看代码</xp-button>
    </h2>
    <!-- 组件显示区域 -->
    <div class="preview-container-component">
      <!-- 动态组件 -->
      <component :is="component"></component>
    </div>
    <!-- 代码显示区域 -->
    <div class="preview-container-code" v-if="codeVisible">
      <!-- <pre> 标签 元素中的文本通常会保留空格和换行符 -->
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
// 内容是异步加载的，这块时候就需要设置手动执行
const Prism = (window as any).Prism;
(window as any).Prism.manual = true
const codeVisible = ref(false);
const props = defineProps({
  // Object用来定义类型
  component: Object,
});
// console.log(props.component!.__sourceCode);
const html = computed(() => {
  // 必须在页面渲染出来之后再去调用
  return Prism.highlight(
    props.component!.__sourceCode,
    Prism.languages.html,
    "html"
  );
});
// 展示和隐藏代码
const showCode = () => (codeVisible.value = true);
const hideCode = () => (codeVisible.value = false);
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.preview-container {
  border: 1px solid $border-color;
  margin: 32px 0px 32px;
  min-width: 300px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-component {
    padding: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      background-color: rgb(250, 250, 250);
    }
  }
}
</style>
