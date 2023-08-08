<template>
  <div class="message-doc-wrapper">
    <h1>消息提示</h1>
    <p>浏览器顶部降下来的旨意</p>
    <div class="preview-wrapper">
      <Preview :component="MessagePreview1"></Preview>
      <Preview :component="MessagePreview2"></Preview>
      <Preview :component="MessagePreview3"></Preview>
      <Preview :component="MessagePreview4"></Preview>
      <Doc title="配置项" type="prop" :body="propDoc" />
      <Doc title="方法" type="methods" :body="methodsDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/dialog', name: 'Dialog 对话框' }"
        :next="{ path: '/doc/Affix', name: '固钉 Affix' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import MessagePreview1 from "./MessagePreview1.preview.vue";
import MessagePreview2 from "./MessagePreview2.preview.vue";
import MessagePreview3 from "./MessagePreview3.preview.vue";
import MessagePreview4 from "./MessagePreview4.preview.vue";

const propDoc = [
  ["message", "消息文字", "string / VNode", "-", "-"],

]

const methodsDoc = [
  ["close", "关闭当前的 Message", "-"]
];

</script>

<style lang="scss">
.message-doc-wrapper {
  .xp-button {
    margin-right: 8px;
  }
}
</style>
