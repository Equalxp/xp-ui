<template>
  <div class="radio-doc-wrapper">
    <h1>Radio 单选框</h1>
    <p>在一组备选项中进行单选</p>
    <div class="preview-wrapper">
      <Preview :component="RaidoPreview1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import RaidoPreview1 from "./RaidoPreview1.preview.vue";


</script>

<style scoped>

</style>