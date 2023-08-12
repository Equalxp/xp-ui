<template>
  <div class="carsouel-doc-wrapper">
    <h1>Carousel 轮播图</h1>
    <p>图片轮流播放给你看</p>
    <div class="preview-wrapper">
      <Preview :component="CarouselPreview1"></Preview>
      <Doc title="Carousel 属性" type="prop" :body="carouselPropDoc" />
      <PrevAndNext 
        :prev="{ path: '/doc/ellipsis', name: 'Ellipsis 文本省略' }"
        :next="{ path: '/doc/calendar', name: '日历 Calendar' }" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '../../../components/Preview.vue';
import PrevAndNext from '../../../components/PrevAndNext.vue'
import Doc from '../../../components/Doc.vue'
import CarouselPreview1 from './CarouselPreview1.preview.vue'

const carouselPropDoc = [
  ['autoplay', '是否自动轮播', 'boolean', 'true / false', 'true'],
  ['duration', '图片停留时间', 'number', '-', '3000'],
  ['initial', '起始图片 id', 'number', '0 - (n-1)', '0'],
  ['hasDot', '是否有切换圆点', 'boolean', 'true / false', 'true'],
  ['hasDirector', '是否有两侧方向按钮', 'boolean', 'true / false', 'true'],
  ['dotBgColor', '圆点颜色', 'string', '-', '-'],
]

</script>

<style scoped>

</style>