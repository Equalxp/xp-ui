<template>
  <div class="select-doc-wrapper">
    <h1>Select 选择器</h1>
    <div class="preview-wrapper">
      <Preview :component="SelectPreview1" />
    </div>
  </div> 
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import SelectPreview1 from "./SelectPreview1.preview.vue";


</script>

<style scoped>

</style>