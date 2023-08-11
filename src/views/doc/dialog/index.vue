<template>
  <h1>Dialog 对话框</h1>
  <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
  <div class="preview-wrapper">
    <Preview :component="DialogPreview1" />
    <Preview :component="DialogPreview2" />
    <!-- <Preview :component="DialogPreview3" /> -->
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import DialogPreview1 from "./DialogPreview1.preview.vue";
import DialogPreview2 from "./DialogPreview2.preview.vue";
import DialogPreview3 from "./DialogPreview3.preview.vue";


</script>

<style scoped>

</style>