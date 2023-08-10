<template>
  <div class="breadcrumb-doc-wrapper">
    <h1>面包屑 Breadcrumb</h1>
    <div class="preview-wrapper">
      <Preview :component="BreadcrumbPreview1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import BreadcrumbPreview1 from "./BreadcrumbPreview1.preview.vue";



</script>

<style scoped>

</style>