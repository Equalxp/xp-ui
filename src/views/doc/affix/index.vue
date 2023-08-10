<template>
  <div class="affix-doc-wrapper">
    <h1>固钉 Affix</h1>
    <p>通过滚动时对目标元素进行判断是否即将离开可视区域，当即将离开可视区域时将目标元素固定在特定可视区域</p>
    <div class="preview-wrapper" style="height: 3000px; padding: 1000px 0">
      <Preview :component="AffixPreview1" />
      <Preview :component="AffixPreview2" />
      <Preview :component="AffixPreview3" />

    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import AffixPreview1 from "./AffixPreview1.preview.vue";
import AffixPreview2 from "./AffixPreview2.preview.vue";
import AffixPreview3 from "./AffixPreview3.preview.vue";


</script>

<style lang="scss">
.xp-affix {
  margin-right: 8px;
}
</style>