<template>
  <div class="avatar-doc-wrapper">
    <h1>Avatar 头像</h1>
    <p>Avatar 组件可以用来代表人和对象</p>
    <div class="preview-wrapper">
      <Preview :component="AvatarPreview1" />
      <Preview :component="AvatarPreview2" />
      <Preview :component="AvatarPreview3" />
      <Preview :component="AvatarPreview4" />
      <Doc title="属性" type="prop" :body="propsDoc" />
      <Doc title="事件" type="event" :body="eventDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/get-started', name: '快速使用' }"
        :next="{ path: '/doc/button', name: '按钮 Button' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
import Preview from "@/components/Preview.vue";
import AvatarPreview1 from "./AvatarPreview1.preview.vue";
import AvatarPreview2 from "./AvatarPreview2.preview.vue";
import AvatarPreview3 from "./AvatarPreview3.preview.vue";
import AvatarPreview4 from "./AvatarPreview4.preview.vue";


const propsDoc = [
  [
    
  ]
]
const eventDoc = [
  [

  ]
]
const slotDoc = [
  [

  ]
]
</script>

<style lang="scss">
.avatar-doc-wrapper {
  .xp-avatar {
    margin-right: 8px;
    margin-top: 8px;
  }
}
</style>