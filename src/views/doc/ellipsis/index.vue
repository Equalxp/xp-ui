<template>
  <div class="ellipsis-doc-wrapper">
    <h1>Ellipsis 文本省略</h1>
    <p>复杂度不会消失，只会转移。</p>
    <div class="preview-wrapper">
      <Preview :component="EllipsisPreview1" />
      <Preview :component="EllipsisPreview2" />
      <Preview :component="EllipsisPreview3" />
      <Doc title="属性" type="prop" :body="propDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/tag', name: '标签 Tag' }"
        :next="{ path: '/doc/carousel', name: '轮播图 Carousel' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import EllipsisPreview1 from "./EllipsisPreview1.preview.vue";
import EllipsisPreview2 from "./EllipsisPreview2.preview.vue";
import EllipsisPreview3 from "./EllipsisPreview3.preview.vue";

const propDoc = [
  ["expand-trigger", "展开的触发方式", "string", "click", "-"],
  ["line-clamp", "	最大行数", "number / string", "-", "-"],
];

const slotDoc = [["default", "	文本省略的内容"]];

</script>

<style scoped>

</style>