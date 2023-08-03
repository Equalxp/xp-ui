<template>
  <div>
    <!-- 由不同侧边栏 点击展示不同 路由展示页面 -->
    <!-- <Button theme="default" />
    <Button theme="primary" />
    <Button theme="info" />
    <Button theme="success" />
    <Button theme="warning" />
    <Button theme="error" /> -->
    <!-- Preview接收参数为组件的实例对象 -->
    <Preview :component="ButtonPreview1" />
  </div>
</template>

<script lang="ts" setup>
// import Button from '../../../lib/button/index.vue'
import ButtonPreview1 from './ButtonPreview1.preview.vue'
import Preview from '../../../components/Preview.vue';
import { onMounted } from 'vue';
onMounted(() => {
  console.log('Preview',Preview);
});
</script>

<style lang="scss">
.xp-button + .xp-button {
  margin-left: 20px;
}
</style>