<preview>
  点击遮罩
</preview>
<template>
  <xp-button theme="primary" @click="toggle">点击打开对话框</xp-button>
  <xp-dialog
    v-model="visible"
    :overlay-closable="false"
    @onOverlayClick="onOverlayClick"
  >
    我觉得用户应该聪明到点遮罩没用的时候就去点确认了。
  </xp-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};

const onOverlayClick = () => {
  console.log("我觉得用户应该聪明到点遮罩没用的时候就去点确认了。");
};
</script>
