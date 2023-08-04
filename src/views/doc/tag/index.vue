<template>
  <div class="tag-doc-wrapper">
    <h1>标签 Tag</h1>
    <p>用于标记和选择</p>
    <div class="preview-wrapper">
      <Preview :component="TagPreview1" />
      <Preview :component="TagPreview2" />
      <Preview :component="TagPreview3" />
      <Preview :component="TagPreview4" />
      <Preview :component="TagPreview5" />

      <Doc title="Tag 属性" type="prop" :body="propDoc" />
      <Doc title="Tag 插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/link', name: '链接 Link' }"
        :next="{ path: '/doc/ellipsis', name: '文本省略 Ellipsis' }"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import TagPreview1 from "./TagPreview1.preview.vue";
import TagPreview2 from "./TagPreview2.preview.vue";
import TagPreview3 from "./TagPreview3.preview.vue";
import TagPreview4 from "./TagPreview4.preview.vue";
import TagPreview5 from "./TagPreview5.preview.vue";

const propDoc = [
  ["closable", "是否可关闭", "boolean", "-", "false"],
]

const slotDoc = [["default", "	标签内容", "-"]];


</script>

<style lang="scss">
.xp-tag {
  margin-right: 8px;
}
</style>