<template>
  <div class="icon-doc-wrapper">
    <h1>Icon图标</h1>
    <p>
      Xp-UI 推荐使用
      <a style="text-decoration: underline; color: #18a058" href="https://www.xicons.org/#/" target="_blank">xicons</a>
      作为图标库。
    </p>
    <div class="preview-wrapper">
      <Preview :component="IconPreview1"></Preview>
      <Preview :component="IconPreview2"></Preview>
      <Preview :component="IconPreview3"></Preview>
      <Doc title="属性" type="prop" :body="propDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext :prev="{ path: '/doc/button', name: '按钮 Button' }" :next="{ path: '/doc/link', name: '链接 Link' }" />
    
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import IconPreview1 from './IconPreview1.preview.vue';
import IconPreview2 from './IconPreview2.preview.vue';
import IconPreview3 from './IconPreview3.preview.vue';

const propDoc = [
  ["color", "图标颜色", "string", "-", "-"],
  ["depth", "图标深度", "number", "-", "10"],
  ["size", "图标大小（当不指定单位时，默认单位: px）", "number / string", "-", "40px"]
]

const slotDoc = [
  ["defalut", "自定义默认内容"]
]

</script>

<style scoped>
.icon-doc-wrapper {
  .xp-icon {
    margin-right: 8px;
    margin-top: 8px;
  }
  p {
    margin-bottom: 30px;
  }
}
</style>