<template>
  <div class="select-doc-wrapper">
    <h1>Select 选择器</h1>
    <div class="preview-wrapper">
      <Preview :component="SelectPreview1" />
      <Preview :component="SelectPreview2 " />
      <Preview :component="SelectPreview3 " />
      <Preview :component="SelectPreview4 " />
      <Preview :component="SelectPreview5 " />
      <Doc title="属性" type="prop" :body="propDoc"></Doc>
      <Doc title="事件" type="event" :body="eventDoc"></Doc>
      <PrevAndNext
        :prev="{ path: '/doc/input', name: 'Input 输入框' }"
        :next="{ path: '/doc/switch', name: '开关 Switch' }"
      />

    </div>
  </div> 
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import SelectPreview1 from "./SelectPreview1.preview.vue";
import SelectPreview2 from "./SelectPreview2.preview.vue";
import SelectPreview3 from "./SelectPreview3.preview.vue";
import SelectPreview4 from "./SelectPreview4.preview.vue";
import SelectPreview5 from "./SelectPreview5.preview.vue";

const propDoc = [
  ["v-model", "绑定值", "	boolean / string / number", "-", "-"],
  ["placeholder", "占位符", "string", "-", "请选择"],
  ["clearable", "是否可以清空选项", "boolean", "-", "false"],
  ["disabled", "是否禁用", "boolean", "-", "false"],
  ["options", "配置选项内容", "Array", "-", "[]"],
  ["multilple", "是否为多选", "boolean", "-", "false"],
]
const eventDoc = [
  ["change", "选中值发生变化时触发", "目前的选中值"],
  ["clear", "在点击由 clearable 属性生成的清空按钮时触发", "-"],
];

</script>

<style scoped>

</style>