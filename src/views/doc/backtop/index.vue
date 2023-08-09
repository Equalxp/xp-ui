<template>
  <div class="backtop-doc-wrapper">
    <h1>回到顶部 BackTop</h1>
    <div class="preview-wrapper">
      <Preview :component="BacktopPreview1" />
      <Preview :component="BacktopPreview2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import BacktopPreview1 from "./BacktopPreview1.preview.vue";
import BacktopPreview2 from "./BacktopPreview2.preview.vue";




</script>

<style lang="scss">

</style>