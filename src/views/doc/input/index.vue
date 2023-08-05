<template>
  <div class="input-doc-wrapper">
    <h1>Input输入框</h1>
    <p>通过鼠标或键盘输入字符</p>
    <div class="preview-wrapper">
      <Preview :component="InputPreview1" />
      <Preview :component="InputPreview2" />
      <Preview :component="InputPreview3" />
      <Preview :component="InputPreview4" />
      <Preview :component="InputPreview5" />
      <Preview :component="InputPreview6" />
      <Preview :component="InputPreview7" />

      <Doc title="Input 属性" type="prop" :body="propDoc"></Doc>
      <PrevAndNext
        :prev="{ path: '/doc/checkbox', name: '复选框 Checkbox' }"
        :next="{ path: '/doc/radio', name: '单选框 Radio' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import InputPreview1 from './InputPreview1.preview.vue';
import InputPreview2 from './InputPreview2.preview.vue';
import InputPreview3 from './InputPreview3.preview.vue';
import InputPreview4 from './InputPreview4.preview.vue';
import InputPreview5 from './InputPreview5.preview.vue';
import InputPreview6 from './InputPreview6.preview.vue';
import InputPreview7 from './InputPreview7.preview.vue';

const propDoc = [
  [
    "type",
    "类型",
    "string",
    "text，textarea 和其他 原生 input 的 type 值",
    "text",
  ],
]

</script>

<style lang="scss">
.input-doc-wrapper {
  .xp-input {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  .xp-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
</style>