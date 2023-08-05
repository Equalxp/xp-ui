<template>
  <div class="checkbox-doc-wrapper">
    <h1>Checkbox 单选框</h1>
    <div class="preview-wrapper">
      <Preview :component="CheckboxPreview1"></Preview>
      <Preview :component="CheckboxPreview2"></Preview>
      <Preview :component="CheckboxPreview3"></Preview>
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import CheckboxPreview1 from './CheckboxPreview1.preview.vue'
import CheckboxPreview2 from './CheckboxPreview2.preview.vue'
import CheckboxPreview3 from './CheckboxPreview3.preview.vue'


</script>

<style lang="scss">
.checkbox-doc-wrapper {
  .xp-checkbox {
    margin-left: 10px;
  }
}
</style>