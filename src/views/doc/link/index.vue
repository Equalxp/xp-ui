<template>
  <div class="link-doc-wrapper">
    <h1>链接</h1>
    <p>文字链接</p>
    <div class="preview-wrapper">
      <Preview :component="LinkPreview1"></Preview>
      <Preview :component="LinkPreview2"></Preview>
      <Preview :component="LinkPreview3"></Preview>
      <Preview :component="LinkPreview4"></Preview>
      <Doc title="属性" type="prop" :body="propDoc"></Doc>
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/icon', name: 'Icon 图标' }"
        :next="{ path: '/doc/tag', name: '标签 Tag' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import LinkPreview1 from '@/views/doc/link/LinkPreview1.preview'
import LinkPreview2 from '@/views/doc/link/LinkPreview2.preview'
import LinkPreview3 from '@/views/doc/link/LinkPreview3.preview'
import LinkPreview4 from '@/views/doc/link/LinkPreview4.preview'

const propDoc = [
  [
    "type",
    "类型",
    "string",
    "primary / success / warning / danger / info",
    "default",
  ],
  ["underline", "是否下划线", "boolean", "-", "true"],
  ["disabled", "是否禁用状态", "boolean", "-", "false"],
  ["href", "原生 href 属性", "string", "-", "-"],
  ["icon", "图标组件", "string / Component", "-", "-"],
  ["icon-placement", "图标组件位置", "string", "left / right", "left"],
  ["icon-size", "图标组件大小", "string / number", "-", "18px"],
]

const slotDoc = [["default", '自定义默认内容']]
</script>

<style lang="scss">
.link-doc-wrapper {
  .xp-link {
    margin-right: 10px;
  }
}
</style>